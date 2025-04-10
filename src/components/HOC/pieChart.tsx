import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const PieChartCard = () => {
  const pieData = [
    { name: "New Delhi", value: 35, color: "#6A5ACD" },
    { name: "Mumbai", value: 23, color: "#FF6347" },
    { name: "West Bengal", value: 21, color: "#FFA500" },
    { name: "Others", value: 9, color: "#FFD700" },
  ];

  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Top Cities</p>
        <h2 className="text-xl font-bold">₹68.2L</h2>
        <p className="text-green-600 text-sm">↑ 2.2%</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
