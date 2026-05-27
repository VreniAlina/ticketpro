import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import "./resumeCard.scss";

export default function ResumeCard(): React.JSX.Element {
  return (
    <>
    <div className="resume-card p-4 rounded-lg shadow-md bg-white">
        <section className="cards-container flex gap-4">
            <div className="card-tickets open">
                <div className="card-info flex items-center gap-4">
                    <div>
                        <span className="card-title">Abiertos</span>
                        <span className="card-count">24</span>
                    </div>
                    <div className="icon-card">
                        <LocalActivityIcon className="card-icon" />
                    </div>
                </div>
                <div className="card-percentage flex items-center gap-1">
                    <span className="percentage-value">+5%</span>
                    <span className="percentage-label">desde ayer</span>
                </div>
            </div>
            <div className="card-tickets progress">
                <div className="card-info flex items-center gap-4">
                    <div>
                        <span className="card-title">En Progreso</span>
                        <span className="card-count">12</span>
                    </div>
                    <div className="icon-card">
                        <AutorenewOutlinedIcon className="card-icon" />
                    </div>
                </div>
                <div className="card-percentage flex items-center gap-1">
                    <span className="percentage-value">+5%</span>
                    <span className="percentage-label">desde ayer</span>
                </div>
            </div>
            <div className="card-tickets pending">
                <div className="card-info flex items-center gap-4">
                    <div>
                        <span className="card-title">Pendientes</span>
                        <span className="card-count">8</span>
                    </div>
                    <div className="icon-card">
                        <PendingActionsOutlinedIcon className="card-icon" />
                    </div>
                </div>
                <div className="card-percentage flex items-center gap-1">
                    <span className="percentage-value">+5%</span>
                    <span className="percentage-label">desde ayer</span>
                </div>
            </div>
            <div className="card-tickets closed">
                <div className="card-info flex items-center gap-4">
                    <div>
                        <span className="card-title">Cerrados</span>
                        <span className="card-count">20</span>
                    </div>
                    <div className="icon-card">
                        <CheckCircleOutlineOutlinedIcon className="card-icon" />
                    </div>
                </div>
                <div className="card-percentage flex items-center gap-1">
                    <span className="percentage-value">+5%</span>
                    <span className="percentage-label">desde ayer</span>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}