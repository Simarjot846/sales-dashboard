"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
];

const pieData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#00f5ff", "#ff00e6", "#39ff14", "#ffaa00"];

export default function DashboardPage() {
  const [activeChart, setActiveChart] = useState("bar");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #050d1a, #091f36)",
        color: "#fff",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { title: "Total Sales", value: "$50K" },
          { title: "Revenue", value: "$120K" },
          { title: "Growth", value: "+25%" },
          { title: "Customers", value: "3.2K" },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{card.title}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        {["bar", "pie", "line"].map((chart) => (
          <button
            key={chart}
            onClick={() => setActiveChart(chart)}
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: activeChart === chart ? "#00f5ff" : "rgba(255,255,255,0.1)",
              color: activeChart === chart ? "#000" : "#fff",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            {chart.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Chart Display */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "1rem",
          padding: "1rem",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeChart === "bar" && (
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ background: "#111", border: "none", color: "#fff" }} />
              <Bar dataKey="sales" fill="url(#colorSales)" />
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#ff00e6" stopOpacity={0.9} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeChart === "pie" && (
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8">
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#111", border: "none", color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        )}

        {activeChart === "line" && (
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ background: "#111", border: "none", color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#39ff14"
                strokeWidth={3}
                dot={{ fill: "#39ff14", strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
