import "@scss/Dashboard.scss";
import ResumeCard from "../components/ResumeCard/ResumeCard";
import Table from "../components/TableTickets/Table";
export default function Dashboard() {
  return (
    <div className="dashboard-container w-64 flex-auto">
        <ResumeCard />
        <Table/>
    </div>
  )
}