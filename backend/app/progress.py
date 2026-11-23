from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import Literal

class TaskResult(BaseModel):
    model_config = ConfigDict(extra='forbid')
    attempt: str = Field(default='', max_length=4000)
    updatedAt: str = Field(max_length=40)

class ExerciseResult(BaseModel):
    model_config = ConfigDict(extra='forbid')
    status: Literal['attempted', 'solved'] = 'attempted'
    hints: int = Field(default=0, ge=0, le=2)
    solutionUsed: bool = False
    updatedAt: str = Field(max_length=40)

class LearningProgress(BaseModel):
    model_config = ConfigDict(extra='forbid')
    savedExperiments: list[dict] = Field(default_factory=list, max_length=12)
    version: Literal[1] = 1
    completedUnits: list[str] = Field(default_factory=list, max_length=500)
    lastVisitedLesson: str | None = Field(default=None, max_length=120)
    lastVisitedUnit: str | None = Field(default=None, max_length=100)
    taskResults: dict[str, TaskResult] = Field(default_factory=dict, max_length=500)
    quizScores: dict[str, float] = Field(default_factory=dict, max_length=500)
    exerciseResults: dict[str, ExerciseResult] = Field(default_factory=dict, max_length=2000)
    courseCompletedAt: dict[str, str] = Field(default_factory=dict, max_length=100)
    learnerName: str = Field(default='', max_length=80)
    lastActivity: str | None = Field(default=None, max_length=40)
    language: Literal['en', 'ar'] = 'en'
    theme: Literal['system', 'dark', 'light'] = 'system'

    @field_validator('completedUnits')
    @classmethod
    def bounded_ids(cls, values):
        if any(not v or len(v)>100 for v in values):
            raise ValueError('Invalid unit identifier')
        return list(dict.fromkeys(values))

    @field_validator('quizScores')
    @classmethod
    def bounded_scores(cls, values):
        if any(not 0<=v<=100 for v in values.values()):
            raise ValueError('Quiz scores must be between zero and 100')
        return values

    @field_validator('taskResults', 'quizScores', 'exerciseResults', 'courseCompletedAt')
    @classmethod
    def bounded_keys(cls, values):
        if any(not k or len(k)>120 for k in values):
            raise ValueError('Invalid progress identifier')
        return values
