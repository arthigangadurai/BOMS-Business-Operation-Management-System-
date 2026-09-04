import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projects: 5 },
  { month: "Feb", projects: 8 },
  { month: "Mar", projects: 10 },
  { month: "Apr", projects: 14 },
  { month: "May", projects: 18 },
  { month: "Jun", projects: 20 },
];

export default function ProjectBarChart() {
  return (
    <div
      style={{
        background: "rgba(18,25,45,.75)",
        padding: 20,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: 20 }}>
        Project Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="projects" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}