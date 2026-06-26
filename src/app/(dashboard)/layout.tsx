"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Menu from "@/components/ui/menu/Menu";
import type { ReactNode } from "react";
import "@scss/dashboard.scss";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  return (
    <div className="dashboard-layout">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <main className="flex flex-col w-full">
        <header>
          <Menu onToggleSidebar={toggleSidebar} />
        </header>

        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  );
}
