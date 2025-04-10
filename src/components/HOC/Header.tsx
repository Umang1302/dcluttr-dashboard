"use client";

import { Switch } from "@/components/ui/switch";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

const Header = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 7, 1), // Aug 1, 2024
    to: addDays(new Date(2024, 7, 1), 2), // Aug 3, 2024
  });
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="bg-white border-[1px] border-[#EBEBEB] rounded-t-lg">
      <div className="flex justify-between items-center px-5 pt-4">
        <h1 className="text-xl font-semibold">Quick Commerce</h1>

        <div className="flex items-center gap-2">
          {/* Calendar Popover */}
          <div className="cursor-pointer px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all flex justify-between w-[100px]">
            {/* Icon */}
            <div className="flex justify-center">
              <Image
                src="/toggleChart.svg"
                width={20}
                height={20}
                alt="toggleImage"
                className="opacity-80"
              />
            </div>

            {/* Toggle Switch */}
            <Switch
              checked={enabled}
              onCheckedChange={setEnabled}
              className="data-[state=checked]:bg-[#027056] rounded-full transition-colors"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "border-[1px] border-[#D5D7D8] text-[#1B1F23] bg-white rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 shadow-none hover:bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
                )}
              >
                <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                <span>
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, yy")} -{" "}
                        {format(date.to, "LLL dd, yyyy")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, yy")
                    )
                  ) : (
                    "Pick a date"
                  )}
                </span>
                <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-4 border-t-[1px] border-[#EBEBEB] py-4 px-4">
        <Tabs defaultValue="blinkit">
          <TabsList className="bg-white px-1 py-1 rounded-[12px] flex border border-[#EBEBEB] space-x-1 min-h-[50px]">
            {/* Blinkit */}
            <TabsTrigger
              value="blinkit"
              className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium text-black data-[state=active]:bg-[#DFEAE8] data-[state=active]:shadow-none transition-all min-h-[30px]"
            >
              <Image src="/blinkIt.svg" width={20} height={20} alt="blinkit" />
              <span>Blinkit</span>
            </TabsTrigger>

            {/* Zepto */}
            <TabsTrigger
              disabled
              value="zepto"
              className="flex items-center gap-2 px-4 py-1.5 rounded-[10px] text-sm font-medium text-black data-[state=active]:bg-[#DFEAE8] data-[state=active]:shadow-none transition-all"
            >
              <Image src="/zepto.svg" width={20} height={20} alt="zepto" />
              <span>Zepto</span>
            </TabsTrigger>

            {/* Instamart */}
            <TabsTrigger
              disabled
              value="instamart"
              className="flex items-center gap-2 px-4 py-1.5 rounded-[10px] text-sm font-medium text-black data-[state=active]:bg-[#DFEAE8] data-[state=active]:shadow-none transition-all"
            >
              <Image
                src="/instamart.svg"
                width={20}
                height={20}
                alt="instamart"
              />
              <span>Instamart</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Header;
