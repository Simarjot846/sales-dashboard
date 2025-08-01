"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { salesData } from "@/lib/salesData";

const SalesChart = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Sales Overview (2022–2024)</h2>
      <BarChart width={500} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SalesChart;
