"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize"); // organize, hired, boards

  return (
    // LAYER 1: The Section boundary, background, and overall padding
    <section className="border-t bg-white py-16 px-4">
      
      {/* LAYER 2: Controls the max-width and centers both tabs + image container */}
      <div className="mx-auto max-w-5xl">
        
        {/* Tabs Grid/Flex */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button
            onClick={() => setActiveTab("organize")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "organize"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Organize Applications
          </Button>
          <Button
            onClick={() => setActiveTab("hired")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "hired"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Get Hired
          </Button>
          <Button
            onClick={() => setActiveTab("boards")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "boards"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Manage Boards
          </Button>
        </div>

        {/* Image Frame */}
        <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-xl">
          {activeTab === "organize" && (
            <Image
              src="/hero-images/hero1.png"
              alt="Organize Applications"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}

          {activeTab === "hired" && (
            <Image
              src="/hero-images/hero2.png"
              alt="Get Hired"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}

          {activeTab === "boards" && (
            <Image
              src="/hero-images/hero3.png"
              alt="Manage Boards"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}
        </div>

      </div>
    </section>
  );
}
