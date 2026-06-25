import Sidebar from "@/components/layout/Sidebar";
import Menu from "@/components/ui/menu/Menu";
import type { ReactNode } from "react";
import "@scss/dashboard.scss";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="flex flex-col w-full">
        <header>
          <Menu />
        </header>

        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  );
}
