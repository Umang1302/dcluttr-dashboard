"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const data = [
  { name: "New Delhi", value: 26.5, percent: 35, change: 1.2 },
  { name: "Mumbai", value: 36.4, percent: 23, change: -3.3 },
  { name: "West Bengal", value: 12.2, percent: 21, change: -2.3 },
  { name: "Others", value: 24.3, percent: 9, change: 1.09 },
];

const COLORS = ["#7E57C2", "#EF5350", "#FFCA28", "#E0E0E0"];

export default function TopCitiesCard() {
  const total = data.reduce((acc, city) => acc + city.value, 0);
  const overallChange = 2.2;

  return (
    <Card className="rounded-2xl border bg-white p-4 shadow-sm w-full font-sans h-full">
      <CardContent className="p-0">
        <h3 className="text-lg font-semibold mb-2">Top Cities</h3>
        <div className="relative flex items-center justify-center">
          <PieChart width={300} height={140}>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
              innerRadius={90}
              outerRadius={120}
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute bottom-[30px] text-center">
            <p className="text-xl font-semibold">₹{total.toFixed(1)}L</p>
            <p
              className={`text-sm flex items-center justify-center ${
                overallChange > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {overallChange > 0 ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {overallChange}%
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {data.map((city, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span>{city.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">₹{city.value}L</span>
                <span className="text-muted-foreground">{city.percent}%</span>
                <span
                  className={`flex items-center ${
                    city.change >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {city.change >= 0 ? (
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-0.5" />
                  )}
                  {Math.abs(city.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
