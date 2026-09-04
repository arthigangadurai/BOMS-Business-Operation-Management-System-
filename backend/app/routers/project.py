from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import traceback

from app.database.connection import get_db
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectUpdate

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)

import traceback

@router.post("/")
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    try:
        new_project = Project(**project.model_dump())

        db.add(new_project)
        db.commit()
        db.refresh(new_project)

        return {
            "message": "Project created successfully",
            "data": new_project
        }

    except Exception as e:
        db.rollback()
        print("\n========== ERROR ==========")
        traceback.print_exc()
        print("===========================\n")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/")
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()


@router.get("/{project_id}")
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    return project


@router.put("/{project_id}")
def update_project(
    project_id: int,
    project: ProjectUpdate,
    db: Session = Depends(get_db)
):
    db_project = db.query(Project).filter(Project.id == project_id).first()

    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")

    for key, value in project.model_dump().items():
        setattr(db_project, key, value)

    db.commit()
    db.refresh(db_project)

    return {
        "message": "Project updated successfully",
        "data": db_project
    }


@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()

    return {
        "message": "Project deleted successfully"
    }