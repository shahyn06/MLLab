import csv
import io
import math
import statistics
import zipfile
from collections import Counter
from fastapi import HTTPException
from .schemas import DatasetInput


def cell(v):
    if v is None or v == '':
        return None
    if isinstance(v, (int, float, bool)):
        return v if not isinstance(v, float) or math.isfinite(v) else None
    value = str(v).strip()
    if len(value) > 10000:
        raise HTTPException(422, 'Cells may contain at most 10000 characters')
    try:
        numeric = float(value)
        return numeric if math.isfinite(numeric) else None
    except ValueError:
        return value


def parse_upload(filename, content, settings):
    if not content:
        raise HTTPException(422, 'The uploaded file is empty')
    if len(content) > settings.upload_bytes:
        raise HTTPException(413, 'Upload exceeds 5 MiB')
    try:
        if filename.lower().endswith('.csv'):
            reader = csv.reader(io.StringIO(content.decode('utf-8-sig')), strict=True)
        elif filename.lower().endswith('.xlsx'):
            # Check expansion before XML parsing to reject zip bombs.
            with zipfile.ZipFile(io.BytesIO(content)) as archive:
                if len(archive.infolist()) > 500 or sum(x.file_size for x in archive.infolist()) > 25 * 1024 * 1024:
                    raise HTTPException(413, 'Expanded workbook exceeds limits')
            from openpyxl import load_workbook
            workbook = load_workbook(io.BytesIO(content), read_only=True, data_only=True, keep_links=False)
            sheet = workbook.active
            if sheet.max_column is not None and sheet.max_column > settings.max_columns:
                raise HTTPException(413, 'Workbook exceeds 100 columns')
            if sheet.max_row is not None and sheet.max_row > settings.max_rows + 1:
                raise HTTPException(413, 'Workbook exceeds 20000 data rows')
            reader = sheet.iter_rows(values_only=True)
        else:
            raise HTTPException(415, 'Only UTF-8 CSV and .xlsx files are supported')
        columns = next(reader, None)
        if not columns:
            raise HTTPException(422, 'The file must have a header row')
        columns = [str(v).strip() if v is not None else '' for v in columns]
        if len(columns) > settings.max_columns:
            raise HTTPException(413, 'Dataset exceeds 100 columns')
        rows = []
        for row in reader:
            if len(rows) >= settings.max_rows:
                raise HTTPException(413, 'Dataset exceeds 20000 rows')
            if len(row) != len(columns):
                raise HTTPException(422, 'Every row must match the header width')
            rows.append([cell(v) for v in row])
        return DatasetInput(name=filename[:120], columns=columns, rows=rows)
    except HTTPException:
        raise
    except (ValueError, UnicodeError, csv.Error, zipfile.BadZipFile, KeyError, OSError) as e:
        raise HTTPException(422, 'Cannot parse dataset: check headers, encoding, and file format') from e
    finally:
        if 'workbook' in locals():
            workbook.close()


def summary(dataset):
    columns, rows = dataset['columns'], dataset['rows']
    output = []
    numeric = {}
    for i, name in enumerate(columns):
        values = [r[i] for r in rows if r[i] is not None]
        numbers = [float(v) for v in values if isinstance(v, (int, float)) and not isinstance(v, bool)]
        kind = 'numeric' if values and len(numbers) == len(values) else 'categorical' if values else 'empty'
        item = {'name': name, 'type': kind, 'missing': len(rows) - len(values), 'unique': len(set(map(str, values)))}
        if kind == 'numeric':
            numeric[name] = i
            q = sorted(numbers)
            import numpy as np
            q1, median, q3 = (float(v) for v in np.quantile(q, [0.25, 0.5, 0.75]))
            iqr = q3 - q1
            item |= {'mean': statistics.mean(numbers), 'median': median, 'mode': statistics.mode(numbers),
                     'variance': statistics.variance(numbers) if len(numbers) > 1 else None,
                     'standard_deviation': statistics.stdev(numbers) if len(numbers) > 1 else None,
                     'min': min(numbers), 'max': max(numbers), 'q1': q1, 'q3': q3,
                     'outlier_count': sum(v < q1 - 1.5 * iqr or v > q3 + 1.5 * iqr for v in numbers)}
        else:
            item['top_values'] = [{'value': v, 'count': n} for v, n in Counter(map(str, values)).most_common(10)]
        output.append(item)
    # Native vectorized pairwise correlation avoids Python O(columns^2*rows) loops.
    import pandas as pd
    numeric_frame = pd.DataFrame({name: [r[i] for r in rows] for name, i in numeric.items()})
    matrix = numeric_frame.corr(min_periods=2)
    correlations = {a: {b: (float(matrix.loc[a,b]) if math.isfinite(matrix.loc[a,b]) else None)
                        for b in numeric} for a in numeric}
    return {'row_count': len(rows), 'column_count': len(columns), 'columns': output,
            'correlation': correlations, 'variance_convention': 'sample (ddof=1)', 'correlation_missing_policy': 'pairwise deletion'}


def export_csv(dataset):
    buffer = io.StringIO()
    writer = csv.writer(buffer)
    # Spreadsheet formula injection protection on export, never mutate stored values.
    def safe(v):
        return "'" + v if isinstance(v, str) and v.lstrip().startswith(('=', '+', '-', '@', '\t', '\r')) else v
    writer.writerow([safe(v) for v in dataset['columns']])
    writer.writerows([[safe(v) for v in row] for row in dataset['rows']])
    return buffer.getvalue()
