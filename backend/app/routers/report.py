from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database.connection import SessionLocal
from app.models.user import User
from app.models.project import Project

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)

@router.get("/summary")
def report_summary():
    db: Session = SessionLocal()

    total_employees = db.query(User).count()
    total_projects = db.query(Project).count()

    completed = db.query(Project).filter(Project.status == "Completed").count()
    pending = db.query(Project).filter(Project.status == "Pending").count()
    in_progress = db.query(Project).filter(Project.status == "In Progress").count()

    db.close()

    return {
        "employees": total_employees,
        "projects": total_projects,
        "completed": completed,
        "pending": pending,
        "in_progress": in_progress
    }


@router.get("/projects")
def report_projects():
    db: Session = SessionLocal()

    projects = db.query(Project).all()

    db.close()

    return projects