"use client";
import Button from '@component/ui/button/Button';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@component/ui/table/Table';
import "@scss/tickets.scss";

export default function TicketsPage(): React.JSX.Element {
    return (
    <>
        <div className="filters">
            <div className="filter-group">
                <div className="filter-state">
                    <label htmlFor="status">Estado:</label>
                    <select id="status" name="status">
                        <option value="">Todos</option>
                        <option value="open">Abierto</option>
                        <option value="in_progress">En Progreso</option>
                        <option value="closed">Cerrado</option>
                    </select>
                </div>
                <div className="filter-priority">
                    <label htmlFor="priority">Prioridad:</label>
                    <select id="priority" name="priority">
                        <option value="">Todos</option>
                        <option value="low">Baja</option>
                        <option value="medium">Media</option>
                        <option value="high">Alta</option>
                    </select>
                </div>
                <div className="filter-assignee">
                    <label htmlFor="assignee">Asignado a:</label>
                    <select id="assignee" name="assignee">
                        <option value="">Todos</option>
                        <option value="user1">Usuario 1</option>
                        <option value="user2">Usuario 2</option>
                        <option value="user3">Usuario 3</option>
                    </select>
                </div>
                <div className="filter add-ticket">
                    <Button onClick={() => console.log("click")}>Crear Ticket</Button>
                </div>
            </div>
            <div className="search-tickets">
                <SearchIcon />
                <input type="text" placeholder="Buscar por titulo o ID" />
            </div>
        </div>
        <div className="ticket-list">
            <Table/>
        </div>
    </>
);
}