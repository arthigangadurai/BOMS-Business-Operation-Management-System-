function ViewEmployee({ employee, closeModal }) {
  if (!employee) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Employee Details</h2>

        <p><b>ID:</b> {employee.id}</p>
        <p><b>Name:</b> {employee.full_name}</p>
        <p><b>Email:</b> {employee.email}</p>
        <p><b>Role:</b> {employee.role}</p>

        <button onClick={closeModal} style={button}>
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
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modal = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  width: "400px",
  color: "#333",
};

const button = {
  marginTop: "20px",
  background: "#1976d2",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ViewEmployee;