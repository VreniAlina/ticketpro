"use client";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./menu.scss";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/pages";
import Button from '@component/ui/button/Button';

export default function Menu({ onToggleSidebar }: { onToggleSidebar?: () => void }): React.JSX.Element {
  const pathname = usePathname();
  const titles: Record<string, string> = {
    [routes.dashboard]: "Dashboard",
    [routes.tickets]: "Tickets",
    [routes.users]: "Usuarios",
    [routes.settings]: "Configuración",
    [routes.kanban]: "Tablero",
  };

  const pageTitle = titles[pathname] || "Página";
  const showButtonPages = ["/board"];
  const showButton = showButtonPages.includes(pathname);
  return (
  <div className="menu d-flex flex-row">
    <div className="menu-left d-flex flex-row items-center gap-4">
      <span
        className="menu-icon"
        role="button"
          tabIndex={0}
          onClick={() => onToggleSidebar?.()}
          onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => { if (e.key === 'Enter' || e.key === ' ') { onToggleSidebar?.(); } }}
      >
        <MenuIcon aria-hidden="true" />
      </span>
      <h2>{pageTitle}</h2>
    </div>
    <div className="menu-right d-flex flex-row items-center gap-4">
        <div className="search d-flex items-center gap-2">
            <SearchIcon />
            <input type="text" placeholder="Buscar por tickets" />
        </div>
        {showButton ? (
          <Button onClick={() => console.log("click")}>
            Crear Ticket
          </Button>
        ) : (
          <div className="notifications d-flex items-center gap-2">
            <NotificationsNoneIcon />
            <AccountCircleOutlinedIcon />
          </div>
        )}
    </div>
  </div>
);
}