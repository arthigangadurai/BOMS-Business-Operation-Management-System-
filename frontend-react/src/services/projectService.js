import api from "./api";

// Get all projects
export const getProjects = async () => {
  return await api.get("/projects/");
};

// Get one project
export const getProject = async (id) => {
  return await api.get(`/projects/${id}`);
};

// Create project
export const createProject = async (data) => {
  return await api.post("/projects/", data);
};

// Update project
export const updateProject = async (id, data) => {
  return await api.put(`/projects/${id}`, data);
};

// Delete project
export const deleteProject = async (id) => {
  return await api.delete(`/projects/${id}`);
};