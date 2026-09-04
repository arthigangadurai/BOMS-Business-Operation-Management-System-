import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", employees: 45 },
  { month: "Feb", employees: 60 },
  { month: "Mar", employees: 78 },
  { month: "Apr", employees: 92 },
  { month: "May", employees: 108 },
  { month: "Jun", employees: 120 },
];

function EmployeeChart() {
  return (
    <div
      style={{
        background: "rgba(18,26,45,0.82)",
        borderRadius: 20,
        padding: 20,
        height: 350,
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,.35)",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Employee Growth
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#2d3d5d" />

          <XAxis dataKey="month" stroke="#ccc" />

          <YAxis stroke="#ccc" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="employees"
            stroke="#3b82f6"
            strokeWidth={4}
            dot={{ fill: "#3b82f6", r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EmployeeChart;