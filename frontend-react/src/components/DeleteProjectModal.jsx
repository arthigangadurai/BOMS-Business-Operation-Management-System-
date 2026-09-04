import { deleteProject } from "../services/projectService";

function DeleteProjectModal({
  project,
  closeModal,
  refreshProjects,
}) {
  const handleDelete = async () => {
    await deleteProject(project.id);
    refreshProjects();
    closeModal();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Delete Project</h2>

        <p>
          Are you sure you want to delete
          <br />
          <strong>{project.project_name}</strong>?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            style={deleteBtn}
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            style={cancelBtn}
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
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
  width: "420px",
  background: "#1b2438",
  color: "#fff",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
};

const deleteBtn = {
  background: "#F44336",
  color: "#fff",
  border: "none",
  padding: "10px 25px",
  borderRadius: "8px",
  cursor: "pointer",
};

const cancelBtn = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  padding: "10px 25px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default DeleteProjectModal;