import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar";
import "@scss/DashboardLayout.scss";

export default function DashboardLayout({children}: {children: React.ReactNode}): React.JSX.Element {
  return (
    <div className="flex flex-row">
     <Sidebar />
     <div className="flex flex-col w-full">
        <Menu />
        {children}
     </div>
    </div>
  )
}