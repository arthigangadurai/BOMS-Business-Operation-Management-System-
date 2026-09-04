import { useState, useEffect } from "react";
import api from "../services/api";

function EmployeeModal({
  employee,
  closeModal,
  refreshEmployees,
})  {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");

useEffect(() => {
    if (employee) {
      setFullName(employee.full_name);
      setEmail(employee.email);
      setRole(employee.role);
      setPassword("");
    } else {
      setFullName("");
      setEmail("");
      setPassword("");
      setRole("employee");
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        full_name: fullName,
        email,
        password,
        role,
      };

      if (employee) {
        await api.put(`/users/${employee.id}`, data);
        alert("Employee updated successfully");
      } else {
        await api.post("/users/", data);
        alert("Employee added successfully");
      }

      refreshEmployees();
      closeModal();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            required
            style={input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            style={input}
          />

          <input
            type="password"
            placeholder={employee ? "New Password" : "Password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required={!employee}
            style={input}
          />

          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            style={input}
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              marginTop:20
            }}
          >
            <button
              type="button"
              onClick={closeModal}
              style={cancelBtn}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={saveBtn}
            >
              {employee ? "Update" : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

const overlay={
  position:"fixed",
  top:0,
  left:0,
  width:"100%",
  height:"100%",
  background:"rgba(0,0,0,.6)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  zIndex:1000,
};

const modal={
  width:"420px",
  background:"#fff",
  borderRadius:"12px",
  padding:"25px",
  boxShadow:"0 0 20px rgba(0,0,0,.3)"
};

const input={
  width:"100%",
  padding:"12px",
  marginTop:"15px",
  borderRadius:"8px",
  border:"1px solid #ccc",
  fontSize:"15px",
  boxSizing:"border-box",
};

const cancelBtn={
  background:"#dc3545",
  color:"#fff",
  border:"none",
  padding:"10px 18px",
  borderRadius:"8px",
  cursor:"pointer",
};

const saveBtn={
  background:"#1976d2",
  color:"#fff",
  border:"none",
  padding:"10px 18px",
  borderRadius:"8px",
  cursor:"pointer",
};

export default EmployeeModal;