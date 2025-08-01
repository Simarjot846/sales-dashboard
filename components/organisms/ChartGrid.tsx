'use client';
import React, { useState } from "react";
import ChartCard from "../molecules/ChartCard";
import Input from "../atoms/Input";
import { filterSalesByYear } from "@/lib/utils";
import salesData from "@/data/salesData.json";

const years = [2022, 2023, 2024];

const ChartGrid = () => {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Input value={threshold} onChange={setThreshold} />
        <button onClick={() => setChartType("bar")} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Bar</button>
        <button onClick={() => setChartType("line")} className="px-4 py-2 bg-green-500 text-white rounded-lg">Line</button>
        <button onClick={() => setChartType("pie")} className="px-4 py-2 bg-purple-500 text-white rounded-lg">Pie</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {years.map((year) => {
          const filtered = filterSalesByYear(salesData, year).filter((d) => d.sales >= threshold);
          return (
            <ChartCard key={year} title={`Sales ${year}`} data={filtered} type={chartType} />
          );
        })}
      </div>
    </div>
  );
};

export default ChartGrid;
