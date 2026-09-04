import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import image from "../assets/image.png";
import ProjectModal from "../components/ProjectModal";
import ViewProjectModal from "../components/ViewProjectModal";
import {
  getProjects,
  deleteProject,
} from "../services/projectService";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewOnly, setViewOnly] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProjects = projects.filter((project) => {

    const searchMatch =
      project.project_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      project.client_name
        .toLowerCase()
        .includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "All" ||
      project.status === statusFilter;

    return searchMatch && statusMatch;
  });

  const lastIndex = currentPage * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  const currentProjects =
    filteredProjects.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    filteredProjects.length / recordsPerPage
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
          rgba(8,12,30,.85),
          rgba(8,12,30,.85)
          ), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              <h1>Projects</h1>
              <p style={{ color: "#aaa" }}>
                Manage all projects
              </p>
            </div>
           <button
  style={addBtn}
  onClick={() => {
    setSelectedProject(null);
    setShowModal(true);
  }}
>
  + Add Project
</button>
          </div>

          {/* Dashboard Card */}
          <div style={card}>
            <h2>{projects.length}</h2>
            <p>Total Projects</p>
          </div>

          {/* Search */}
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
              style={input}
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "rgba(13,22,42,.8)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>Project</th>
                <th style={thStyle}>Client</th>
                <th style={thStyle}>Manager</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Priority</th>
                <th
  style={{
    ...thStyle,
    minWidth: "230px",
  }}
>
  Actions
</th>
              </tr>
            </thead>

            <tbody>
              {currentProjects.map((project, index) => (
                <tr key={project.id}>
                  <td style={tdStyle}>
                    {firstIndex + index + 1}
                  </td>

                  <td style={tdStyle}>
                    {project.project_name}
                  </td>

                  <td style={tdStyle}>
                    {project.client_name}
                  </td>

                  <td style={tdStyle}>
                    {project.project_manager}
                  </td>

                  <td style={tdStyle}>
                    {project.status}
                  </td>

                  <td style={tdStyle}>
                    {project.priority}
                  </td>

                  <td style={tdStyle}>
                   <button
  style={viewBtn}
  onClick={() => {
    setSelectedProject(project);
    setShowViewModal(true);
  }}
>
  View
</button>

                  <button
  style={{
    ...editBtn,
    marginLeft: 8,
  }}
  onClick={() => {
    setSelectedProject(project);
    setShowModal(true);
  }}
>
  Edit
</button>

                    <button
                      style={{
                        ...deleteBtn,
                        marginLeft: 8,
                      }}
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Delete this project?"
                          )
                        ) {
                          await deleteProject(project.id);
                          fetchProjects();
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 25,
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
        </div>

      </div>
     {showModal && (
  <ProjectModal
    project={selectedProject}
    viewOnly={viewOnly}
    closeModal={() => {
      setShowModal(false);
      setSelectedProject(null);
      setViewOnly(false);
    }}
    refreshProjects={fetchProjects}
      />
      )}
       {showViewModal && (
        <ViewProjectModal
          project={selectedProject}
          closeModal={() => {
            setShowViewModal(false);
            setSelectedProject(null);
          }}
        />
       )}
    </>
  );
}
const card = {
  background: "rgba(20,25,40,.75)",
  backdropFilter: "blur(12px)",
  borderRadius: "18px",
  padding: "25px",
  marginBottom: "20px",
  textAlign: "center",
  color: "#fff",
};

const input = {
  flex: 1,
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,.08)",
  color: "#fff",
};

const thStyle = {
  background: "#1976d2",
  color: "#fff",
  padding: "15px",
};

const tdStyle = {
  padding: "10px",
  textAlign: "center",
  color: "#fff",
  wordBreak: "break-word",
};

const addBtn = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

const viewBtn = {
  background: "#00BCD4",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  minWidth: "70px",
};

const editBtn = {
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  minWidth: "70px",
};

const deleteBtn = {
  background: "#F44336",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  minWidth: "70px",
};

export default Projects;