/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderGroup {
  label: string;
  colspan: number;
}

interface Header {
  groups?: HeaderGroup[];
  columns: string[];
}

interface TableData {
  [key: string]: any;
}

interface TableComponentProps {
  headers: Header;
  data: TableData[];
  showCheckbox?: boolean;
  showFooter?: boolean;
  footerData?: Record<string, any>;
  onSelectionChange?: (selectedRows: TableData[]) => void;
}

export default function TableComponent({
  headers,
  data,
  showCheckbox = false,
  showFooter = false,
  footerData,
  onSelectionChange,
}: TableComponentProps) {
  const [tableData, setTableData] = useState<TableData[]>(data);

  const handleCheckboxToggle = (index: number) => {
    const updatedData = [...tableData];
    updatedData[index].checked = !updatedData[index].checked;
    setTableData(updatedData);
    onSelectionChange?.(updatedData.filter((row) => row.checked));
  };

  return (
    <div className="overflow-auto rounded-lg border">
      <Table>
        <TableHeader className="bg-white">
          {headers.groups && (
            <TableRow>
              {showCheckbox && (
                <TableHead rowSpan={2}>
                  <p className="flex justify-start gap-2">
                    <Image
                      src="/toggleChart.svg"
                      width={20}
                      height={20}
                      alt="toggleImage"
                    />
                    SKU Name
                  </p>
                </TableHead>
              )}
              {headers.groups.map((group, i) => (
                <TableHead
                  key={i}
                  colSpan={group.colspan}
                  className="text-center bg-white"
                >
                  {group.label}
                </TableHead>
              ))}
            </TableRow>
          )}
          <TableRow className="bg-white">
            {!headers.groups && showCheckbox && <TableHead>SKU Name</TableHead>}
            {headers.columns.map((col, i) => (
              <TableHead key={i}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.map((row, idx) => (
            <TableRow key={idx} className={` ${row.checked ? "" : "bg-white"}`}>
              {showCheckbox && (
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="data-[state=checked]:bg-[#027056] data-[state=checked]:border-[#027056]"
                      checked={row.checked}
                      onCheckedChange={() => handleCheckboxToggle(idx)}
                    />
                    <span className="text-sm font-medium">{row.name}</span>
                  </div>
                </TableCell>
              )}
              {headers.columns.map((key, i) => (
                <TableCell key={i}>
                  {row[key.toLowerCase()] || row[key]}
                  {row.changes?.[key.toLowerCase()] && (
                    <ChangeIndicator value={row.changes[key.toLowerCase()]} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {showFooter && footerData && (
            <TableRow className="font-semibold bg-white">
              {showCheckbox && <TableCell>Total</TableCell>}
              {headers.columns.map((key, i) => (
                <TableCell key={i}>{footerData[key.toLowerCase()]}</TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function ChangeIndicator({ value }: { value: string }) {
  const isPositive = value.startsWith("+");
  return (
    <span
      className={cn(
        "ml-1 text-xs flex items-center gap-0.5",
        isPositive ? "text-green-600" : "text-red-600"
      )}
    >
      {isPositive ? (
        <ArrowUp className="h-3 w-3" />
      ) : (
        <ArrowDown className="h-3 w-3" />
      )}
      {value}
    </span>
  );
}
