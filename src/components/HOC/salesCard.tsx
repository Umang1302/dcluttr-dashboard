/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { date: "09", thisMonth: 3, lastMonth: 1.5 },
  { date: "10", thisMonth: 4.5, lastMonth: 3 },
  { date: "11", thisMonth: 6, lastMonth: 4.5 },
  { date: "12", thisMonth: 4.5, lastMonth: 6 },
  { date: "13", thisMonth: 6, lastMonth: 6 },
  { date: "14", thisMonth: 1.5, lastMonth: 6 },
  { date: "15", thisMonth: 3, lastMonth: 6 },
  { date: "09", thisMonth: 3, lastMonth: 1.5 },
  { date: "10", thisMonth: 4.5, lastMonth: 3 },
  { date: "11", thisMonth: 6, lastMonth: 4.5 },
  { date: "12", thisMonth: 4.5, lastMonth: 6 },
];

const SalesCard = ({ title }: any) => {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm w-full font-sans">
      <div className="text-sm font-medium text-gray-500">{title}</div>
      <div className="flex items-center justify-between mt-1 mb-1">
        <div className="text-3xl font-semibold text-gray-900">125.49</div>
        <div>
          <div className="flex items-center text-green-600 text-sm font-medium">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            2.4%
          </div>
          <div className="text-xs text-gray-400 mb-2">vs 119.69 last month</div>
        </div>
      </div>

      <div className="ml-[-2rem] pr-3 my-5">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              fontSize={15}
            />
            <YAxis
              domain={[0, 6]}
              tickLine={false}
              axisLine={false}
              fontSize={15}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black text-white text-xs px-2 py-1 rounded">
                      ₹{payload[0].value}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#28B463"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#E67E22"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around text-[10px] mt-2">
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-[#28B463]" />
          <span>This Month</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
          <span>Last Month</span>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
