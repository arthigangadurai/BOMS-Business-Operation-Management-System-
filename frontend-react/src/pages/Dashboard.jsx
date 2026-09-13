import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import image from "../assets/image.png";
import EmployeeChart from "../charts/EmployeeChart";
import DepartmentPie from "../charts/DepartmentPie";
import ProjectBarChart from "../charts/ProjectBarChart";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
function Dashboard() {
  const [stats, setStats] = useState({
  employees: 0,
  projects: 0,
  revenue: 0,
  reports: 0,
});

useEffect(() => {
  loadStats();
}, []);

const loadStats = async () => {
  try {
    const res = await axios.get(
      "https://boms-business-operation-management-system.onrender.com/dashboard/stats"
    );

    setStats(res.data);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        style={{
          marginLeft: "220px",
          minHeight: "100vh",
          padding: "90px 30px 30px",
          backgroundImage: `linear-gradient(rgba(5,10,25,.82), rgba(5,10,25,.88)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
        }}
      >
        {/* Header */}
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "35px",
  }}
>
  <div>
    <h1
      style={{
        fontSize: "52px",
        margin: 0,
        fontWeight: "700",
      }}
    >
      Dashboard
    </h1>

    <p
      style={{
        color: "#b7c4d6",
        fontSize: "18px",
        marginTop: "10px",
      }}
    >
      Welcome back! Here's your business overview.
    </p>
  </div>

  <div style={{ display: "flex", gap: "15px" }}>
    <Link
      to="/"
      style={{
        background: "#1976d2",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: "10px",
        textDecoration: "none",
      }}
    >
      🏠 Home
    </Link>

    <button
      style={{
        background: "#2563eb",
        color: "#fff",
        border: "none",
        padding: "14px 28px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      + New Project
    </button>
  </div>
</div>

        {/* Cards */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "25px",
  }}
>
  <Card title="Employees" value={stats.employees} />
  <Card title="Projects" value={stats.projects} />
  <Card title="Revenue" value={`₹${stats.revenue}`} />
  <Card title="Reports" value={stats.reports} />
</div>

{/* Charts */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 25,
    marginTop: 35,
  }}
>
  <EmployeeChart />
  <DepartmentPie />
</div>
<div
  style={{
    marginTop: 35,
  }}
>
  <ProjectBarChart />
</div>

{/* Recent Activities */}
<div style={{ marginTop: "35px" }}>
  {/* Your Recent Activities code stays here */}
</div>
        {/* Recent Activities */}
        <div
          style={{
            marginTop: "35px",
            background: "rgba(18,25,45,.75)",
            backdropFilter: "blur(16px)",
            borderRadius: "18px",
            padding: "25px",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <h2>Recent Activities</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={th}>Employee</th>
                <th style={th}>Activity</th>
                <th style={th}>Time</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={td}>Arthi</td>
                <td style={td}>Added New Employee</td>
                <td style={td}>10 mins ago</td>
              </tr>

              <tr>
                <td style={td}>Admin</td>
                <td style={td}>Updated Project</td>
                <td style={td}>1 hour ago</td>
              </tr>

              <tr>
                <td style={td}>Manager</td>
                <td style={td}>Generated Report</td>
                <td style={td}>Today</td>
              </tr>
            </tbody>
          </table>
          </div>   {/* Recent Activities */}

      </div>     {/* Main Dashboard Container */}

    </>
  );
}

const th = {
  padding: "15px",
  borderBottom: "1px solid rgba(255,255,255,.1)",
  textAlign: "left",
};

const td = {
  padding: "15px",
  borderBottom: "1px solid rgba(255,255,255,.05)",
};
export default Dashboard;