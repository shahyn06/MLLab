import json
import math
from typing import Any, Literal
from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator


class StrictModel(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)


class Credentials(StrictModel):
    username: str = Field(min_length=3, max_length=50, pattern=r'^[a-zA-Z0-9_.-]+$')
    password: str = Field(min_length=10, max_length=128)


class DatasetInput(StrictModel):
    name: str = Field(min_length=1, max_length=120)
    columns: list[str] = Field(min_length=1, max_length=100)
    rows: list[list[str | float | int | bool | None]] = Field(max_length=20000)

    @model_validator(mode='after')
    def check_shape(self):
        if any(not c.strip() or len(c) > 120 for c in self.columns) or len(set(self.columns)) != len(self.columns):
            raise ValueError('Column names must be unique, nonempty, and at most 120 characters')
        if any(len(r) != len(self.columns) for r in self.rows):
            raise ValueError('Every row must match the column count')
        if len(json.dumps(self.model_dump(), allow_nan=False).encode()) > 5 * 1024 * 1024:
            raise ValueError('Dataset exceeds the 5 MiB limit')
        return self


class ExperimentInput(StrictModel):
    name: str = Field(min_length=1, max_length=120)
    algorithm: str = Field(min_length=1, max_length=100)
    dataset_id: str | None = None
    hyperparameters: dict[str, Any] = Field(default_factory=dict)
    training_config: dict[str, Any] = Field(default_factory=dict)
    metrics: dict[str, float] = Field(default_factory=dict)
    results: dict[str, Any] = Field(default_factory=dict)
    history: list[dict[str, Any]] = Field(default_factory=list, max_length=10000)
    provenance: Literal['client_computed', 'demonstration'] = 'client_computed'

    @model_validator(mode='after')
    def check_json(self):
        try:
            content = json.dumps(self.model_dump(), allow_nan=False)
        except ValueError as e:
            raise ValueError('Non-finite JSON numbers are not allowed') from e
        if len(content.encode()) > 2 * 1024 * 1024:
            raise ValueError('Experiment exceeds the 2 MiB limit')
        return self


class CompareInput(StrictModel):
    ids: list[str] = Field(min_length=2, max_length=10)


class TrainInput(StrictModel):
    dataset_id: str
    name: str = Field(default='Trained model', min_length=1, max_length=120)
    algorithm: Literal['linear_regression', 'logistic_regression', 'knn', 'decision_tree', 'kmeans', 'ridge', 'lasso', 'elastic_net', 'random_forest', 'svm', 'naive_bayes', 'gradient_boosting', 'hierarchical', 'dbscan', 'gmm', 'pca', 'anomaly_detection']
    features: list[str] = Field(min_length=1, max_length=30)
    target: str | None = None
    test_fraction: float = Field(default=0.2, ge=0.1, le=0.5)
    seed: int = Field(default=42, ge=0, le=2147483647)
    hyperparameters: dict[str, float | int | str] = Field(default_factory=dict)

    @field_validator('features')
    @classmethod
    def unique_features(cls, v):
        if len(set(v)) != len(v):
            raise ValueError('Features must be unique')
        return v


class PlaygroundInput(StrictModel):
    code: str = Field(min_length=1, max_length=30000)


class DatasetInfo(BaseModel):
    id: str
    name: str
    columns: list[str]
    row_count: int
    column_count: int
    created_at: str


class DatasetPreview(DatasetInfo):
    rows: list[list[Any]]
    offset: int
    limit: int


class DatasetList(BaseModel):
    total: int
    items: list[DatasetInfo]


class ExperimentOutput(BaseModel):
    id: str
    name: str
    algorithm: str
    dataset_id: str | None = None
    hyperparameters: dict[str, Any]
    training_config: dict[str, Any]
    metrics: dict[str, float | None]
    results: dict[str, Any]
    history: list[dict[str, Any]]
    provenance: Literal['client_computed', 'demonstration', 'server_computed']
    created_at: str
    updated_at: str


class ExperimentList(BaseModel):
    total: int
    items: list[ExperimentOutput]


class CompareOutput(BaseModel):
    items: list[ExperimentOutput]
    metric_names: list[str]
    warning: str


class ChartOutput(BaseModel):
    mime_type: Literal['image/png']
    base64: str


class PlaygroundOutput(BaseModel):
    status: Literal['ok', 'error', 'timeout']
    stdout: str
    stderr: str
    charts: list[ChartOutput]
    elapsed_seconds: float
    exit_code: int
    limits: dict[str, Any]


class PlaygroundCapability(BaseModel):
    available: bool
    reason: str | None


class CapabilityOutput(BaseModel):
    auth_enabled: bool
    persistence: str
    cloud_persistence: bool
    algorithms: list[str]
    unsupported_algorithms: list[str]
    model_export: list[str]
    dataset_formats: list[str]
    limits: dict[str, int]
    playground: PlaygroundCapability


class AuthToken(BaseModel):
    access_token: str
    token_type: Literal['bearer']
    expires_at: str


class AccountOutput(BaseModel):
    id: str
    username: str
