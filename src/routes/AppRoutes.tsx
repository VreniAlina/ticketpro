import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Tickets from "../pages/Tickets";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Kanban from "../pages/Tablero";

export default function AppRoutes() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/view_kanban" element={<Kanban />} />
      </Routes>
    </DashboardLayout>
  );
}