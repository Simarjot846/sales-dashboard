"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

export default function ChartGrid() {
  const barData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 50 },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];

  const lineData = [
    { name: "Week 1", uv: 400, pv: 240 },
    { name: "Week 2", uv: 300, pv: 456 },
    { name: "Week 3", uv: 200, pv: 139 },
    { name: "Week 4", uv: 278, pv: 390 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
      
      {/* Bar Chart */}
      <div style={chartCardStyle}>
        <h3>📊 Monthly Sales</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div style={chartCardStyle}>
        <h3>🥧 Market Share</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div style={chartCardStyle}>
        <h3>📈 Weekly Growth</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#00C49F" strokeWidth={2} />
            <Line type="monotone" dataKey="pv" stroke="#FF8042" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const chartCardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.05)",
  padding: "15px",
  borderRadius: "10px",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};




