import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "IT", value: 45 },
  { name: "HR", value: 20 },
  { name: "Finance", value: 15 },
  { name: "Marketing", value: 20 },
];

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

function DepartmentPie() {
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
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Department Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DepartmentPie;