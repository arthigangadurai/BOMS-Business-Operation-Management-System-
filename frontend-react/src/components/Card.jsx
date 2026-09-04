import { FaUsers, FaProjectDiagram, FaFileAlt, FaRupeeSign } from "react-icons/fa";

function Card({ title, value }) {
  const getIcon = () => {
    switch (title) {
      case "Employees":
        return <FaUsers size={30} />;
      case "Projects":
        return <FaProjectDiagram size={30} />;
      case "Reports":
        return <FaFileAlt size={30} />;
      case "Revenue":
        return <FaRupeeSign size={30} />;
      default:
        return <FaUsers size={30} />;
    }
  };

  const getColor = () => {
    switch (title) {
      case "Employees":
        return "#3B82F6";
      case "Projects":
        return "#10B981";
      case "Reports":
        return "#F59E0B";
      case "Revenue":
        return "#EF4444";
      default:
        return "#6366F1";
    }
  };

  return (
    <div
      style={{
        background: "rgba(17,24,39,0.75)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "25px",
        color: "#fff",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(0,0,0,.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(0,0,0,.35)";
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: getColor(),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {getIcon()}
      </div>

      <h3
        style={{
          margin: 0,
          color: "#d1d5db",
          fontWeight: 500,
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: 10,
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Card;