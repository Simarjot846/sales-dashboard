'use client';
import React from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

type ChartCardProps = {
  title: string;
  data: any[];
  type: "bar" | "line" | "pie";
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const ChartCard: React.FC<ChartCardProps> = ({ title, data, type }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" && (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          )}
          {type === "line" && (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          )}
          {type === "pie" && (
            <PieChart>
              <Pie data={data} dataKey="sales" nameKey="month" outerRadius={100}>
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
