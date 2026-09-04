import { Link } from "react-router-dom";
import image from "../assets/image.png";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(5,10,25,.88),rgba(5,10,25,.88)),url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Navbar */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
        }}
      >
        <h2 style={{ color: "#4da3ff" }}>BOMS</h2>

        <div style={{ display: "flex", gap: 25 }}>
          <a href="#features" style={link}>Features</a>
          <a href="#modules" style={link}>Modules</a>
          <a href="#about" style={link}>About</a>

          <Link to="/login" style={loginBtn}>
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "90px 80px",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={heroTitle}>
  Business Operations Management System
</h1>

          <p
            style={{
              fontSize: 20,
              color: "#cfd8dc",
              lineHeight: "35px",
            }}
          >
            Manage Employees, Projects and Reports from one
            secure dashboard with role-based access,
            analytics and real-time tracking.
          </p>

          <div style={{ marginTop: 40 }}>
            <Link to="/login" style={startBtn}>
              Get Started
            </Link>

            <a
              href="#features"
              style={learnBtn}
            >
              Learn More
            </a>
          </div>
        </div>

        <div style={{ width: "40%" }}>
          <div style={heroCard}>
            <h2>Dashboard Preview</h2>

            <div style={cardRow}>
              <div style={miniCard}>
                <h2>12</h2>
                Employees
              </div>

              <div style={miniCard}>
                <h2>3</h2>
                Projects
              </div>
            </div>

            <div style={cardRow}>
              <div style={miniCard}>
                <h2>2</h2>
                Completed
              </div>

              <div style={miniCard}>
                <h2>₹5.2L</h2>
                Revenue
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}

      <section
        id="features"
        style={{
          padding: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: 40,
            marginBottom: 60,
          }}
        >
          Features
        </h2>

        <div style={featureGrid}>
          <div style={featureCard}>
            👨‍💼
            <h3>Employee Management</h3>
            <p>
              Add, update, delete and search employees.
            </p>
          </div>

          <div style={featureCard}>
            📁
            <h3>Project Management</h3>
            <p>
              Track project status, priority and managers.
            </p>
          </div>

          <div style={featureCard}>
            📊
            <h3>Analytics</h3>
            <p>
              Dashboard with employee and project statistics.
            </p>
          </div>

          <div style={featureCard}>
            🖨
            <h3>Reports</h3>
            <p>
              Printable reports with project summaries.
            </p>
          </div>

          <div style={featureCard}>
            🔒
            <h3>Secure Login</h3>
            <p>
              JWT Authentication using FastAPI.
            </p>
          </div>

          <div style={featureCard}>
            ⚡
            <h3>Fast Performance</h3>
            <p>
              React + FastAPI + PostgreSQL architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const link = {
  color: "#fff",
  textDecoration: "none",
};

const loginBtn = {
  background: "#2196f3",
  color: "#fff",
  padding: "10px 25px",
  borderRadius: 8,
  textDecoration: "none",
};

const startBtn = {
  background: "#1976d2",
  color: "#fff",
  padding: "14px 35px",
  borderRadius: 8,
  textDecoration: "none",
  marginRight: 20,
};

const learnBtn = {
  border: "2px solid white",
  color: "#fff",
  padding: "12px 30px",
  borderRadius: 8,
  textDecoration: "none",
};
const heroTitle = {
  fontSize: "52px",
  fontWeight: "bold",
  color: "#fff",
  lineHeight: "1.2",
  marginBottom: "20px",
};

const heroCard = {
  background: "rgba(255,255,255,.08)",
  padding: 30,
  borderRadius: 20,
  backdropFilter: "blur(15px)",
};

const cardRow = {
  display: "flex",
  gap: 20,
  marginTop: 20,
};

const miniCard = {
  flex: 1,
  background: "#10233f",
  padding: 20,
  borderRadius: 10,
  textAlign: "center",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 30,
};

const featureCard = {
  background: "#12223c",
  padding: 35,
  borderRadius: 15,
  textAlign: "center",
  fontSize: 18,
};

export default Home;