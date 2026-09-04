import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import image from "../assets/image.png";

function Reports() {
  const [summary, setSummary] = useState({
    employees: 0,
    projects: 0,
    completed: 0,
    pending: 0,
    in_progress: 0,
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const summaryRes = await axios.get(
        "http://127.0.0.1:8000/reports/summary"
      );

      const projectRes = await axios.get(
        "http://127.0.0.1:8000/reports/projects"
      );

      setSummary(summaryRes.data);
      setProjects(projectRes.data);
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
          marginLeft: "240px",
          minHeight: "100vh",
          padding: "90px 30px",
          color: "#fff",
          backgroundImage: `linear-gradient(rgba(8,12,30,.85),rgba(8,12,30,.85)),url(${image})`,
          backgroundSize: "cover",
        }}
      >
       <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  }}
>
  <h1>Reports</h1>

  <button
    onClick={() => window.print()}
    style={{
      background: "#1976d2",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    🖨 Print Report
  </button>
</div>

        <div style={cardContainer}>
          <div style={card}>
            <h2>{summary.employees}</h2>
            <p>Total Employees</p>
          </div>

          <div style={card}>
            <h2>{summary.projects}</h2>
            <p>Total Projects</p>
          </div>

          <div style={card}>
            <h2>{summary.completed}</h2>
            <p>Completed</p>
          </div>

          <div style={card}>
            <h2>{summary.pending}</h2>
            <p>Pending</p>
          </div>

          <div style={card}>
            <h2>{summary.in_progress}</h2>
            <p>In Progress</p>
          </div>
        </div>

        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Project</th>
              <th style={th}>Client</th>
              <th style={th}>Manager</th>
              <th style={th}>Status</th>
              <th style={th}>Priority</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td style={td}>{project.project_name}</td>
                <td style={td}>{project.client_name}</td>
                <td style={td}>{project.project_manager}</td>
                <td style={td}>
  <span
    style={{
      padding: "5px 12px",
      borderRadius: "15px",
      color: "#fff",
      fontWeight: "bold",
      background:
        project.status === "Completed"
          ? "#4CAF50"
          : project.status === "Pending"
          ? "#FFC107"
          : "#2196F3",
    }}
  >
    {project.status}
  </span>
</td>
                <td style={td}>{project.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const cardContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const card = {
  background: "rgba(20,25,40,.8)",
  padding: "20px",
  borderRadius: "12px",
  width: "180px",
  textAlign: "center",
};

const table = {
  width: "100%",
  marginTop: "30px",
  borderCollapse: "collapse",
  background: "rgba(20,25,40,.85)",
  borderRadius: "12px",
  overflow: "hidden",
};

const th = {
  background: "#1976d2",
  color: "#fff",
  padding: "12px",
};

const td = {
  padding: "12px",
  textAlign: "center",
  color: "#fff",
};

export default Reports;