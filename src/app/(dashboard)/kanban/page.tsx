"use client";
import AddIcon from '@mui/icons-material/Add';
import "@scss/kanban.scss";

export default function KanbanPage(): React.JSX.Element {
    return (
        <div className="tablero-container">
            <div className="tablero-columns">
                
                {/* Columna: Pendiente */}
                <div className="tablero-column-body">
                    <div className="tablero-column-header">
                        <h3>Pendiente</h3>
                        <span className="ticket-count">3</span>
                    </div>
                    
                    {/* Contenedor opcional para tus futuros tickets */}
                    <div className="tablero-tickets-list"></div>

                    {/* Botón para añadir tickets */}
                    <button 
                        className="btn-add-ticket"
                        onClick={() => console.log("Añadir ticket a Pendiente")}
                    >
                        <AddIcon className="icon-add" />
                        <span>Añadir tarjeta</span>
                    </button>
                </div>

                {/* Columna: En Progreso */}
                <div className="tablero-column-body">
                    <div className="tablero-column-header">
                        <h3>En Progreso</h3>
                        <span className="ticket-count">2</span>
                    </div>

                    <div className="tablero-tickets-list"></div>

                    <button 
                        className="btn-add-ticket"
                        onClick={() => console.log("Añadir ticket a En Progreso")}
                    >
                        <AddIcon className="icon-add" />
                        <span>Añadir tarjeta</span>
                    </button>
                </div>

                {/* Columna: Resuelto */}
                <div className="tablero-column-body">
                    <div className="tablero-column-header">
                        <h3>Resuelto</h3>
                        <span className="ticket-count">1</span>
                    </div>

                    <div className="tablero-tickets-list"></div>

                    <button 
                        className="btn-add-ticket"
                        onClick={() => console.log("Añadir ticket a Resuelto")}
                    >
                        <AddIcon className="icon-add" />
                        <span>Añadir tarjeta</span>
                    </button>
                </div>

                {/* Botón para añadir secciones */}
                <button 
                    className="btn-add-column" 
                    onClick={() => console.log("Añadir columna")}
                >
                    <AddIcon />
                    <span className="btn-add-column-text">Añadir sección</span> 
                </button>
            </div>
        </div>
    );
}