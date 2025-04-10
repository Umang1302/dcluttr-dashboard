/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import SalesCard from "@/components/HOC/salesCard";

import TopCitiesCard from "@/components/HOC/topCitiesChart";
import TableComponent from "@/components/HOC/TableComponent";
import Header from "@/components/HOC/Header";
import { footerData, headers, tableData } from "@/constant/Constant";

export default function QuickCommerceDashboard() {
  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <Header />
      <div className="bg-[#FAFAFA] p-4 rounded-b-lg mt-[-1.5rem]">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <SalesCard title={"Sales (MRP)"} />
          <SalesCard title={"Total Quantity Sold"} />
          <TopCitiesCard />
        </div>

        {/* SKU level data */}
        <div className="flex items-center justify-between mb-4 mt-10 px-3">
          <div>
            <h2 className="text-lg font-bold text-gray-800">SKU level data</h2>
            <p className="text-xs text-muted-foreground">
              Analytics for all your SKUs
            </p>
          </div>
          <Button
            variant="default"
            className="bg-[#027056] hover:bg-green-800 text-white"
          >
            Filters(1)
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <TableComponent
          headers={headers}
          data={tableData}
          showCheckbox
          showFooter
          footerData={footerData}
        />

        {/* City level data */}
        <div className="flex items-center justify-between mb-4 mt-10 px-3">
          <div>
            <h2 className="text-lg font-bold text-gray-800">City level data</h2>
            <p className="text-xs text-muted-foreground">
              Analytics for all your Cities
            </p>
          </div>
          <Button
            variant="default"
            className="bg-[#027056] hover:bg-green-800 text-white"
          >
            Filters(1)
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <TableComponent
          headers={headers}
          data={tableData}
          showCheckbox
          showFooter
          footerData={footerData}
        />
      </div>
    </div>
  );
}
