import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/employees" element={<Employees />} />

    <Route path="/projects" element={<Projects />} />

    <Route path="/reports" element={<Reports />} />
</Routes>
      <footer
  style={{
    marginTop: "40px",
    padding: "18px",
    textAlign: "center",
    color: "#d1d5db",
    fontSize: "14px",
    background: "rgba(15,23,42,0.8)",
    borderRadius: "10px"
  }}
>
  © 2026 <strong>BOMS</strong> - Business Operations Management System <br />
  Developed by <strong>Arthi G</strong>. All Rights Reserved.
</footer>
    </BrowserRouter>
  );
}

export default App;