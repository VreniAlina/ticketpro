"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@scss/sidebar.scss";
import Logo from "@images/logo_ticketPro_white.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/pages";

export default function Sidebar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string): string => {
    return pathname === href ? "active-link" : "";
  };

  return (
    <aside className="sidebar w-14 flex flex-col items-center">
      <Image className="logo" src={Logo} alt="Logo" />

      <nav className="menu-container space-y-4">
        <ul className="menu-options flex flex-col space-y-4">
          <li>
            <Link
              href={routes.dashboard}
              className={`link ${isActive(routes.dashboard)}`}
            >
              <HomeOutlinedIcon /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={routes.tickets}
              className={`link ${isActive(routes.tickets)}`}
            >
              <LocalActivityOutlinedIcon /> Tickets
            </Link>
          </li>
          <li>
            <Link
              href={routes.kanban}
              className={`link ${isActive(routes.kanban)}`}
            >
              <ViewKanbanOutlinedIcon /> Tablero
            </Link>
          </li>
          <li>
            <Link
              href={routes.users}
              className={`link ${isActive(routes.users)}`}
            >
              <GroupOutlinedIcon /> Usuarios
            </Link>
          </li>
          <li>
            <Link
              href={routes.settings}
              className={`link ${isActive(routes.settings)}`}
            >
              <BuildCircleOutlinedIcon /> Configuración
            </Link>
          </li>
        </ul>
      </nav>

      <div className="login-container" onClick={() => setIsOpen(!isOpen)}>
        <div className="user-info flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AccountCircleOutlinedIcon />

            <div className="user-details flex flex-col">
              <p>Juan Pérez</p>
              <span>Administrador</span>
            </div>
          </div>

          <KeyboardArrowRightOutlinedIcon
            className={`arrow ${isOpen ? "rotate-arrow" : ""}`}
          />
        </div>

        {isOpen && (
          <div className="user-menu">
            <p>Mi perfil</p>
            <p>Cambiar contraseña</p>
            <p>Cerrar contraseña</p>
            <p>Cerrar sesión</p>
          </div>
        )}
      </div>
    </aside>
  );
}
