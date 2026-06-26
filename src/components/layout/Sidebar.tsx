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
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoCollapsed from "@images/logo_ticketPro_collapsed.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Sidebar({ isSidebarOpen = true }: { isSidebarOpen?: boolean }): React.JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const pathname = usePathname();

  const getLinkClassName = (href: string): string => {
    const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
    return `link ${isActive ? "active-link" : ""}`;
  };

  return (
    <aside className={`sidebar flex flex-col items-center ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Image
        className={`logo ${!isSidebarOpen ? "logo-collapsed" : ""}`}
        src={isSidebarOpen ? Logo : LogoCollapsed}
        alt="Logo"
        priority
      />

      <nav className="menu-container space-y-4">
        <ul className="menu-options flex flex-col space-y-4">
          <li>
            <Tooltip
              title={!isSidebarOpen ? "Dashboard" : ""}
              placement="right"
              arrow
            >
              <Link className={getLinkClassName("/")} href="/">
                <HomeOutlinedIcon />
                <span className="link-text">Dashboard</span>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title={!isSidebarOpen ? "Tickets" : ""}
              placement="right"
              arrow
            >
              <Link className={getLinkClassName("/tickets")} href="/tickets">
                <LocalActivityOutlinedIcon /> <span className="link-text">Tickets</span>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title={!isSidebarOpen ? "Tablero" : ""}
              placement="right"
              arrow
            >
              <Link className={getLinkClassName("/board")} href="/board">
                <ViewKanbanOutlinedIcon /> <span className="link-text">Tablero</span>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title={!isSidebarOpen ? "Usuarios" : ""}
              placement="right"
              arrow
            >
              <Link className={getLinkClassName("/users")} href="/users">
                <GroupOutlinedIcon /> <span className="link-text">Usuarios</span>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title={!isSidebarOpen ? "Configuración" : ""}
              placement="right"
              arrow
            >
              <Link className={getLinkClassName("/settings")} href="/settings">
                <BuildCircleOutlinedIcon /> <span className="link-text">Configuración</span>
              </Link>
            </Tooltip>
          </li>
        </ul>
      </nav>

      <div
        className="login-container"
        onClick={handleOpenMenu}
      >
        <div className="user-left flex items-center gap-2">
          <AccountCircleOutlinedIcon />

          {isSidebarOpen && (
            <div className="user-details flex flex-col">
              <p>Juan Pérez</p>
              <span>Administrador</span>
            </div>
          )}
        </div>

        {isSidebarOpen && (
          <KeyboardArrowRightOutlinedIcon
            className={`arrow ${menuOpen ? "rotate-arrow" : ""}`}
          />
        )}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              width: 240,
              borderRadius: 3,
              mt: 1,
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography sx={{ fontWeight: 600 }}>
            Juan Pérez
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Administrador
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Mi perfil
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <LockOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Cambiar contraseña
          </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Cerrar sesión
          </ListItemText>
        </MenuItem>
      </Menu>
    </aside>
  );
}
