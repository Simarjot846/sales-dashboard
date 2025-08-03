// components/Chart.tsx
'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { year: 2022, sales: 3000 },
  { year: 2023, sales: 4000 },
  { year: 2024, sales: 5000 },
];

export default function Chart() {
  return (
    <div>
      <BarChart width={450} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#4F46E5" />
      </BarChart>
    </div>
  );
}

