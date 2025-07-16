"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          }`}
        >
          <Header />
          <main className="flex-1 p-6 space-y-6">{children}</main>
        </div>
      </div>
    </>
  );
}
