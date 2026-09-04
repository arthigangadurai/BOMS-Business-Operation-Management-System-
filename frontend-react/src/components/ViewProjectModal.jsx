function ViewProjectModal({ project, closeModal }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Project Details</h2>

        <p><strong>Project Name:</strong> {project.project_name}</p>
        <p><strong>Client Name:</strong> {project.client_name}</p>
        <p><strong>Project Manager:</strong> {project.project_manager}</p>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Start Date:</strong> {project.start_date}</p>
        <p><strong>End Date:</strong> {project.end_date}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Priority:</strong> {project.priority}</p>

        <button onClick={closeModal} style={closeBtn}>
          Close
        </button>
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
  width: "500px",
  background: "#1b2438",
  color: "#fff",
  padding: "25px",
  borderRadius: "12px",
};

const closeBtn = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ViewProjectModal;