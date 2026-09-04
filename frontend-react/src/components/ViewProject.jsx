function ViewProject({ project, closeModal }) {
  if (!project) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2 style={{ textAlign: "center" }}>
          Project Details
        </h2>

        <div style={row}>
          <strong>Project Name:</strong>
          <span>{project.project_name}</span>
        </div>

        <div style={row}>
          <strong>Client Name:</strong>
          <span>{project.client_name}</span>
        </div>

        <div style={row}>
          <strong>Project Manager:</strong>
          <span>{project.project_manager}</span>
        </div>

        <div style={row}>
          <strong>Description:</strong>
          <span>{project.description}</span>
        </div>

        <div style={row}>
          <strong>Start Date:</strong>
          <span>{project.start_date}</span>
        </div>

        <div style={row}>
          <strong>End Date:</strong>
          <span>{project.end_date}</span>
        </div>

        <div style={row}>
          <strong>Status:</strong>
          <span>{project.status}</span>
        </div>

        <div style={row}>
          <strong>Priority:</strong>
          <span>{project.priority}</span>
        </div>

        <button
          style={closeBtn}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  width: "500px",
  background: "#1b2438",
  padding: "30px",
  borderRadius: "15px",
  color: "#fff",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
};

const closeBtn = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ViewProject;