import React, { useState } from "react";
import { NavLink  } from "react-router-dom";
import "@scss/Sidebar.scss";
import Logo from "@images/logo_ticketPro_white.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
export default function Sidebar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="sidebar w-14 flex flex-col items-center">
      <img className="logo" src={Logo} alt="Logo" />

      <nav className="menu-container space-y-4">
        <ul className="menu-options flex flex-col space-y-4">
          <li>
            <NavLink className={({ isActive }) =>
                `link ${isActive ? "active-link" : ""}`
              } to="/" end>
              <HomeOutlinedIcon /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                `link ${isActive ? "active-link" : ""}`
              } to="/tickets">
              <LocalActivityOutlinedIcon /> Tickets
            </NavLink>
          </li> 
          <li>
            <NavLink className={({ isActive }) =>
                `link ${isActive ? "active-link" : ""}`
              } to="/view_kanban">
              <ViewKanbanOutlinedIcon /> Tablero
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                `link ${isActive ? "active-link" : ""}`
              } to="/users">
              <GroupOutlinedIcon /> Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                `link ${isActive ? "active-link" : ""}`
              } to="/settings">
              <BuildCircleOutlinedIcon /> Configuración
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div
        className="login-container"
        onClick={() => setIsOpen(!isOpen)}
      >
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
  )
}