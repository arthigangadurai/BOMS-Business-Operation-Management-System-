from pydantic import BaseModel
from datetime import date
from typing import Optional


class ProjectBase(BaseModel):
    project_name: str
    client_name: str
    project_manager: str
    description: Optional[str] = None
    start_date: date
    end_date: date
    status: str
    priority: str


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True