'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

import { salesData } from '../../lib/salesData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Dashboard() {
  const [threshold, setThreshold] = useState<number>(0);
  const filteredData = salesData.filter((data) => data.sales >= threshold);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800">
      <motion.h1
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📊 Sales Dashboard
      </motion.h1>

      {/* 🏠 Link to Homepage */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            ← Back to Home
          </button>
        </Link>
      </motion.div>

      {/* Threshold Filter Input */}
      <motion.div
        className="max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
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
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bar Chart */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold mb-4">📦 Bar Chart</h2>
          <BarChart width={450} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg font-semibold mb-4">📈 Line Chart</h2>
          <LineChart width={450} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#F59E0B" />
          </LineChart>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </main>
  );
}


