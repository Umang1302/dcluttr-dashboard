// components/Sidebar.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronsUpDown,
  HelpCircle,
  Settings,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [showChannels, setShowChannels] = useState(true);
  const [brands, setBrands] = useState("perfora");

  return (
    <div className="flex h-screen">
      {/* Left Slim Bar */}
      <div className="w-[60px] bg-[#fff] flex flex-col items-center py-4 justify-between h-full ">
        <div className="flex flex-col items-center space-y-4">
          <button onClick={() => setBrands("perfora")}>
            <Image
              src="/perfora.svg"
              className={`w-10 h-10 rounded outline-offset-2 ${
                brands === "perfora" ? "outline-2 outline-green-500" : ""
              }`}
              width={40}
              height={40}
              alt="perfora"
            />
          </button>

          <button onClick={() => setBrands("mamaEarth")}>
            <Image
              src="/mamaEarth.svg"
              className={`w-10 h-10 rounded outline-offset-2 ${
                brands === "mamaEarth" ? "outline-2 outline-green-500" : ""
              }`}
              width={40}
              height={40}
              alt="mamaEarth"
            />
          </button>

          <button onClick={() => setBrands("boat")}>
            <Image
              src="/boat.svg"
              className={`w-10 h-10 rounded outline-offset-2 ${
                brands === "boat" ? "outline-2 outline-green-500" : ""
              }`}
              width={40}
              height={40}
              alt="boat"
            />
          </button>
          <button className="w-10 h-10 rounded-full bg-white text-black text-lg font-semibold flex items-center justify-center border border-green-500 shadow hover:bg-green-50 transition">
            +
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <UsersRoundIcon className={`w-6 h-6 text-gray-500`} />
          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
            SS
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white">
        {/* Brand Switcher */}
        <div className="p-4">
          <div className="flex items-center justify-between rounded-md px-3 py-2 cursor-pointer hover:bg-gray-200 border-[1px] transition">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#3ddc91] text-white text-xs font-semibold flex items-center justify-center">
                SS
              </div>
              <span className="text-sm font-medium text-gray-800">
                Test_brand
              </span>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="w-[240px] h-[90vh] flex flex-col justify-between text-sm bg-[#F8F8F8] pt-10">
          {/* Top Section */}
          <div>
            {/* Navigation */}
            <nav className="px-4 space-y-1">
              {/* Overview */}
              <div className="flex items-center space-x-2 text-gray-700 py-2 hover:bg-[#E0F2EC] hover:rounded-md px-2 cursor-pointer font-medium">
                <Image
                  src="/Overview.svg"
                  width={22}
                  height={22}
                  alt="creatives"
                />
                <span>Overview</span>
              </div>

              {/* Channels Section */}
              <div>
                <button
                  className="flex items-center w-full space-x-2 text-gray-700 py-2 hover:bg-[#E0F2EC] hover:rounded-md px-2 cursor-pointer font-medium"
                  onClick={() => setShowChannels(!showChannels)}
                >
                  <Image
                    src="/Channels.svg"
                    width={22}
                    height={22}
                    alt="creatives"
                  />
                  <span>Channels</span>
                  <ChevronDown
                    className={`ml-auto w-4 h-4 text-gray-400 transition-transform ${
                      showChannels ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showChannels && (
                  <div className="ml-6 mt-1 space-y-1 text-gray-500 text-[13px]">
                    <div className="py-1 px-2 hover:bg-[#E0F2EC] hover:rounded-md cursor-pointer">
                      Meta Ads
                    </div>
                    <div className="py-1 px-2 hover:bg-[#E0F2EC] hover:rounded-md cursor-pointer">
                      Google Ads
                    </div>
                    <div className="bg-[#E0F2EC] text-[#158466] px-2 py-1 rounded-md font-medium">
                      Quick Commerce
                    </div>
                  </div>
                )}
              </div>

              {/* Creatives */}
              <div className="flex items-center space-x-2 text-gray-700 py-2 hover:bg-[#E0F2EC] hover:rounded-md px-2 cursor-pointer font-medium">
                <Image
                  src="/Creatives.svg"
                  width={22}
                  height={22}
                  alt="creatives"
                />
                <span>Creatives</span>
              </div>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="px-4 pb-4 space-y-3 text-gray-500 text-sm">
            <div className="flex items-center space-x-2 hover:text-gray-700 cursor-pointer">
              <HelpCircle className="w-4 h-4" />
              <span>Help</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-gray-700 cursor-pointer">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
