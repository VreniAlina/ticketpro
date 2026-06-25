"use client";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import "./menu.scss";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/pages";

export default function Menu(): React.JSX.Element {
  const pathname = usePathname();
  const titles: Record<string, string> = {
    [routes.dashboard]: "Dashboard",
    [routes.tickets]: "Tickets",
    [routes.users]: "Usuarios",
    [routes.settings]: "Configuración",
    [routes.kanban]: "Tablero",
  };

  const pageTitle = titles[pathname] || "Página";
  return (
    <div className="menu d-flex flex-row">
      <div className="menu-left d-flex flex-row items-center gap-4">
        <MenuIcon />
        <h1>{pageTitle}</h1>
      </div>
      <div className="menu-right d-flex flex-row items-center gap-4">
        <div className="search d-flex items-center gap-2">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="notifications d-flex items-center gap-2">
          <NotificationsNoneIcon />
          <LanguageIcon />
        </div>
      </div>
    </div>
  );
}
