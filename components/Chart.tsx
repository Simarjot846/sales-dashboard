// components/Chart.tsx
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2022', sales: 2400 },
  { year: '2023', sales: 1398 },
  { year: '2024', sales: 9800 },
];

export default function Chart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
