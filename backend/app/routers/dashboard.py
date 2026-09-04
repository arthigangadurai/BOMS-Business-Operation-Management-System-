from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database.connection import SessionLocal
from app.models.user import User
from app.models.project import Project
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/stats")
def get_dashboard_stats():
    db: Session = SessionLocal()

    total_employees = db.query(User).count()
    total_projects = db.query(Project).count()

    db.close()

    return {
        "employees": total_employees,
        "projects": total_projects,
        "revenue": 520000,
        "reports": total_projects
    }