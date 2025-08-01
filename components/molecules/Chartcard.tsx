import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type ChartCardProps = {
  title: string;
  data: { name: string; sales: number }[];
  type: "bar" | "line" | "pie";
};

const ChartCard: React.FC<ChartCardProps> = ({ title, data, type }) => {
  let chartElement: React.ReactElement;

  if (type === "bar") {
    chartElement = (
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    );
  } else {
    chartElement = (
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {chartElement}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;


