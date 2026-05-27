import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Menu.scss";
import { useLocation } from "react-router-dom";


export default function Menu(): React.JSX.Element {
const location = useLocation();
const titles: Record<string, string> = {
    "/": "Dashboard",
    "/tickets": "Tickets",
    "/users": "Usuarios",
    "/settings": "Configuración",
    "/view_kanban": "Tablero",
  };

  const pageTitle = titles[location.pathname] || "Página";
return (
  <div className="menu d-flex flex-row">
    <div className="menu-left d-flex flex-row items-center gap-4">
        <MenuIcon />
        <h2>{pageTitle}</h2>
    </div>
    <div className="menu-right d-flex flex-row items-center gap-4">
        <div className="search d-flex items-center gap-2">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
        </div>
        <div className="notifications d-flex items-center gap-2">
            <NotificationsNoneIcon />
            <AccountCircleOutlinedIcon />
        </div>
    </div>
  </div>
);
}