import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function UvIndex({ todayData }) {
  const [chartSize, setChartSize] = useState({ width: 120, height: 90 });

  // هندل تغییر سایز صفحه 
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 640) {
        // موبایل
        setChartSize({ width: 90, height: 70 });
      } else if (w < 768) {
        setChartSize({ width: 110, height: 80 });
      } else if (w < 1024) {
        // تبلت
        setChartSize({ width: 90, height: 70 });
      } else {
        // دسکتاپ
        setChartSize({ width: 200, height: 140 });
      }
    };

    handleResize(); // بار اول هم اجرا بشه
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!todayData || !todayData.data) {
    return (
      <div className="text-gray-500 text-center mt-10">در حال بارگذاری...</div>
    );
  }

  const uv = todayData.data[0].uv;

  const data = [
    {
      name: "UV",
      uv: uv,
      fill: "#fbbf24",
    },
  ];

  return (
    <div className=" w-[100px] h-[130px] flex flex-col items-center  esm:h-[170px] esm:justify-center  sm:w-[160px] md:w-[120px]
         lg:w-[200px] xl:w-[300px] p-4bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)]
        dark:bg-[rgba(0,0,0,0.35)] dark:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 
         hover:shadow-xl rounded-2xl shadow mt-3">
      <p className="text-gray-600 mb-2 text-[10px] md:text-[15px] dark:text-slate-200">UV شاخص</p>

      

        <RadialBarChart
          width={chartSize.width}
          height={chartSize.height}
          cx="50%"
          cy="60%"
          innerRadius={chartSize.width / 3}
          outerRadius={chartSize.width / 2.5}
          startAngle={180}
          endAngle={0}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 12]}
            ticks={[0, 3, 6, 9, 12]}
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#9E9E9E"
                fontSize={12}
              >
                {payload.value}
              </text>
            )}
          />
          <RadialBar minAngle={15} background clockWise dataKey="uv" />
        </RadialBarChart>
     

      <p className="text-center text-2xl font-bold -mt-10 text-[10px] md:text-[15px] lg:text-2xl dark:text-slate-200">{uv}</p>
    </div>
  );
}
