import { useState, useEffect } from "react";
import {
  createProject,
  updateProject,
} from "../services/projectService";

function ProjectModal({
  project,
  closeModal,
  refreshProjects,
}) {
  const [form, setForm] = useState({
    project_name: "",
    client_name: "",
    project_manager: "",
    description: "",
    start_date: "",
    end_date: "",
    status: "Pending",
    priority: "Medium",
  });

  useEffect(() => {
    if (project) {
      setForm(project);
    }
  }, [project]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Sending:", form);

  try {
    if (project) {
      await updateProject(project.id, form);
    } else {
      await createProject(form);
    }

    refreshProjects();
    closeModal();
  } catch (err) {
    console.log("Response:", err.response?.data);
    console.log("Status:", err.response?.status);
    alert("Something went wrong");
  }
};

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>
          {project ? "Edit Project" : "Add Project"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            name="project_name"
            placeholder="Project Name"
            value={form.project_name}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            name="client_name"
            placeholder="Client Name"
            value={form.client_name}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            name="project_manager"
            placeholder="Project Manager"
            value={form.project_manager}
            onChange={handleChange}
            style={input}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            style={{
              ...input,
              height: 90,
            }}
          />

          <label>Start Date</label>

          <input
            type="date"
            name="start_date"
            value={form.start_date}
            onChange={handleChange}
            style={input}
          />

          <label>End Date</label>

          <input
            type="date"
            name="end_date"
            value={form.end_date}
            onChange={handleChange}
            style={input}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={input}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            style={input}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <button
              type="submit"
              style={saveBtn}
            >
              Save
            </button>

            <button
              type="button"
              style={cancelBtn}
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  width: 500,
  background: "#1b2438",
  padding: 25,
  borderRadius: 15,
  color: "#fff",
};

const input = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  borderRadius: 8,
};

const saveBtn = {
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
};

const cancelBtn = {
  background: "#F44336",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
};

export default ProjectModal;