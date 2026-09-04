from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import engine
from app.database.base import Base

# Import models
from app.models.user import User

# Import routers
from app.routers.user import router as user_router
from app.routers.dashboard import router as dashboard_router
from app.routers.project import router as project_router
from app.routers.report import router as report_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="BOMS API",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user_router)
app.include_router(dashboard_router)
app.include_router(project_router)
app.include_router(report_router)

@app.get("/")
def root():
    return {
        "message": "BOMS API is running successfully!"
    }