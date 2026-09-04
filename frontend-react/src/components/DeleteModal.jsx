import api from "../services/api";

function DeleteModal({
  employee,
  closeModal,
  refreshEmployees,
}) {
  const handleDelete = async () => {
    try {
      await api.delete(`/users/${employee.id}`);

      alert("Employee deleted successfully");

      refreshEmployees();

      closeModal();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2 style={{ color: "#fff" }}>Delete Employee</h2>

        <p style={{ color: "#ccc" }}>
          Are you sure you want to delete
          <br />
          <b>{employee.full_name}</b> ?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            marginTop: 25,
          }}
        >
          <button style={cancelBtn} onClick={closeModal}>
            Cancel
          </button>

          <button style={deleteBtn} onClick={handleDelete}>
            Delete
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
  zIndex: 999,
};

const modal = {
  width: 420,
  background: "#242424",
  padding: 30,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,.5)",
};

const cancelBtn = {
  background: "#777",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: 8,
  cursor: "pointer",
};

const deleteBtn = {
  background: "#f44336",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: 8,
  cursor: "pointer",
};

export default DeleteModal;