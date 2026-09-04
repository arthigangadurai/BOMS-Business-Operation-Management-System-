import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeModal from "../components/EmployeeModal";
import ViewEmployee from "../components/ViewEmployee";
import DeleteModal from "../components/DeleteModal";
import image from "../assets/image.png";
function Employees() {
  const [employees, setEmployees] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/users/");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const searchMatch =
      emp.full_name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const roleMatch =
      roleFilter === "All" || emp.role === roleFilter;

    return searchMatch && roleMatch;
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentEmployees = filteredEmployees.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredEmployees.length / recordsPerPage
  );

  return (
    <>
      <Navbar />
      <Sidebar />

      <div
    style={{
      marginLeft: "240px",
      minHeight: "100vh",
      backgroundImage: `linear-gradient(
      rgba(8, 12, 30, 0.85),
      rgba(8, 12, 30, 0.85)
    ), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    <div
      style={{
        padding: "90px 35px",
        color: "#fff",
      }}
    >
  
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <div>
            <h1>Employees</h1>
            <p style={{ color: "#aaa" }}>
              Manage all employees
            </p>
          </div>

          <button
            style={addBtn}
            onClick={() => {
              setSelectedEmployee(null);
              setShowModal(true);
            }}
          >
            + Add Employee
          </button>
        </div>

        {/* Dashboard Card */}
        <div style={card}>
          <h2>{employees.length}</h2>
          <p>Total Employees</p>
        </div>

        {/* Search + Filter */}
        <div
          style={{
            display: "flex",
            gap: 15,
            marginBottom: 20,
          }}
        >
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={input}
          />

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
            style={input}
          >
            <option>All</option>
            <option>employee</option>
            <option>admin</option>
          </select>
        </div>

        {/* Table */}
<div
  style={{
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto 25px",
    overflowX: "auto",
    borderRadius: "18px",
  }}
>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "rgba(13,22,42,0.78)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
    }}
  >
    <thead>
      <tr>
        <th style={thStyle}>S.No</th>
        <th style={thStyle}>Name</th>
        <th style={thStyle}>Email</th>
        <th style={thStyle}>Role</th>
        <th style={thStyle}>Actions</th>
      </tr>
    </thead>

    <tbody>
      {currentEmployees.map((emp, index) => (
        <tr key={emp.id}>
          <td style={tdStyle}>{firstIndex + index + 1}</td>

          <td style={tdStyle}>{emp.full_name}</td>

          <td style={tdStyle}>{emp.email}</td>

          <td style={tdStyle}>
            <span
              style={{
                background: emp.role === "admin" ? "#ff9800" : "#4CAF50",
                padding: "6px 14px",
                borderRadius: "20px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              {emp.role}
            </span>
          </td>

          <td
            style={{
              ...tdStyle,
              whiteSpace: "nowrap",
            }}
          >
            <button
              style={viewBtn}
              onClick={() => {
                setSelectedEmployee(emp);
                setShowView(true);
              }}
            >
              View
            </button>

            <button
              style={{ ...editBtn, marginLeft: "8px" }}
              onClick={() => {
                setSelectedEmployee(emp);
                setShowModal(true);
              }}
            >
              Edit
            </button>

            <button
              style={{ ...deleteBtn, marginLeft: "8px" }}
              onClick={() => {
                setSelectedEmployee(emp);
                setShowDelete(true);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Pagination */}
       <div
  style={{
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  }}
>
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next
          </button>
        </div>

        {/* Add/Edit */}
        {showModal && (
          <EmployeeModal
            employee={selectedEmployee}
            closeModal={() => {
              setShowModal(false);
              setSelectedEmployee(null);
            }}
            refreshEmployees={fetchEmployees}
          />
        )}

        {/* View */}
        {showView && (
          <ViewEmployee
            employee={selectedEmployee}
            closeModal={() => {
              setShowView(false);
              setSelectedEmployee(null);
            }}
          />
        )}

        {/* Delete */}
        {showDelete && (
          <DeleteModal
            employee={selectedEmployee}
            closeModal={() => {
              setShowDelete(false);
              setSelectedEmployee(null);
            }}
            refreshEmployees={fetchEmployees}
          />
        )}
      </div>   {/* Closes the inner content div */}
  </div>     {/* Closes the background div */}
</>
);
}
const card = {
  background: "rgba(20,25,40,.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "18px",
  padding: "25px",
  marginBottom: "20px",
  color: "#fff",
  boxShadow: "0 10px 35px rgba(0,0,0,.35)",
  textAlign: "center",
};

const input = {
  flex: 1,
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,.15)",
  background: "rgba(255,255,255,.08)",
  color: "#fff",
  backdropFilter: "blur(10px)",
  outline: "none",
};

const thStyle = {
  background: "#1976d2",
  color: "#fff",
  padding: "16px",
  textAlign: "center",
  fontWeight: "600",
};

const tdStyle = {
  padding: "18px",
  textAlign: "center",
  color: "#fff",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const addBtn = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: 8,
  cursor: "pointer",
};
const viewBtn = {
  width: "70px",
  height: "36px",
  background: "#00BCD4",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "6px",
};

const editBtn = {
  width: "70px",
  height: "36px",
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "6px",
};

const deleteBtn = {
  width: "70px",
  height: "36px",
  background: "#F44336",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Employees;