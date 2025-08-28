import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function UvIndex({ todayData }) {
  if (!todayData || !todayData.data) {
    return <div className="text-gray-500 text-center mt-10">در حال بارگذاری...</div>;
  }

  const uv = todayData.data[0].uv; // مقدار UV از API

  const data = [
    {
      name: "UV",
      uv: uv,
      fill: "#fbbf24", // رنگ زرد
    },
  ];

  return (
    <div className="w-64 p-4 bg-gray-100 rounded-xl shadow flex flex-col items-center">
      <p className="text-gray-600 mb-2">UV Index</p>

      <RadialBarChart
        width={250}
        height={180}
        cx={125}
        cy={150}
        innerRadius={70}
        outerRadius={100}
        startAngle={180}
        endAngle={0}
        data={data}
      >
        {/* محور زاویه‌ای با tick های سفارشی */}
        <PolarAngleAxis
          type="number"
          domain={[0, 12]}
          ticks={[0, 6, 9, 12]} // استپ‌ها
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#555"
              fontSize={12}
            >
              {payload.value}
            </text>
          )}
        />
        <RadialBar minAngle={15} background clockWise dataKey="uv" />
      </RadialBarChart>

      {/* عدد وسط */}
      <p className="text-center text-2xl font-bold -mt-8">{uv}</p>
    </div>
  );
}
