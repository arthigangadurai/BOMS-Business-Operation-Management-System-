from sqlalchemy import Column, Integer, String, Date
from app.database.base import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    project_name = Column(String(150), nullable=False)
    client_name = Column(String(100), nullable=False)
    project_manager = Column(String(100), nullable=False)

    description = Column(String(500))

    start_date = Column(Date)
    end_date = Column(Date)

    status = Column(String(30), default="Pending")
    priority = Column(String(20), default="Medium")