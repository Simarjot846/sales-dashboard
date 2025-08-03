// app/dashboard/page.tsx

'use client';

import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { salesData } from '../../lib/salesData'; // 👈 path adjusted

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function DashboardPage() {
  const [threshold, setThreshold] = useState<number>(0);

  const filteredData = salesData.filter((data) => data.sales >= threshold);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">📊 Sales Dashboard</h1>

      {/* Threshold Filter Input */}
      <div className="max-w-xl mx-auto mb-10">
        <label className="block text-sm font-medium mb-2">
          🔎 Filter Sales Above:
        </label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          placeholder="Enter sales threshold"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">📦 Bar Chart</h2>
          <BarChart width={450} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">📈 Line Chart</h2>
          <LineChart width={450} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#F59E0B" />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">🥧 Pie Chart</h2>
          <PieChart width={800} height={300}>
            <Pie
              data={filteredData}
              dataKey="sales"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {filteredData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </main>
  );
}

