import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LeadList from "./components/LeadList";
import LeadModal from "./components/LeadModal";
import Sidebar from "./components/Sidebar";
import { mockLeads } from "./data/mockLeads";

export default function App() {
  const [leads, setLeads] = useState(mockLeads);
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const statusOptions = ["Novo", "Contatado", "Respondeu", "Negociação", "Fechado"];

  const stats = {
    total: leads.length,
    contatados: leads.filter((l) => ["Contatado", "Respondeu", "Negociação", "Fechado"].includes(l.status)).length,
    responderam: leads.filter((l) => ["Respondeu", "Negociação", "Fechado"].includes(l.status)).length,
    fechados: leads.filter((l) => l.status === "Fechado").length,
  };

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
  };

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} activeView={activeView} setActiveView={setActiveView} />

      <div className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
              <span /><span /><span />
            </button>
            <div className="logo-inline">
              <div className="logo-dot" />
              <span className="logo-text">ProspectFlow</span>
            </div>
          </div>
          <div className="topbar-right">
            <button className="btn-new-lead" onClick={() => setSelectedLead({ _new: true })}>
              + Novo Lead
            </button>
            <div className="avatar">JD</div>
          </div>
        </header>

        <main className="page-body">
          <div className="page-header">
            <div>
              <p className="page-label">CRM de Prospecção</p>
              <h1 className="page-title">Dashboard</h1>
            </div>
            <div className="badge-today">
              {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })}
            </div>
          </div>

          <Dashboard stats={stats} />

          <LeadList
            leads={leads}
            statusOptions={statusOptions}
            onStatusChange={handleStatusChange}
            onViewDetails={setSelectedLead}
          />
        </main>
      </div>

      {selectedLead && (
        <LeadModal
          lead={selectedLead._new ? null : selectedLead}
          statusOptions={statusOptions}
          onClose={() => setSelectedLead(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
