import { useState } from "react";

const STATUS_CONFIG = {
  Novo: { color: "status-novo", dot: "#60a5fa" },
  Contatado: { color: "status-contatado", dot: "#a78bfa" },
  Respondeu: { color: "status-respondeu", dot: "#fbbf24" },
  Negociação: { color: "status-negociacao", dot: "#fb923c" },
  Fechado: { color: "status-fechado", dot: "#34d399" },
};

const NICHO_ICONS = {
  Barbearia: "✂",
  Odontologia: "🦷",
  Mecânica: "⚙",
  Gastronomia: "🍽",
  "Saúde & Fitness": "◎",
  Farmácia: "＋",
  "Pet Shop": "◈",
  Advocacia: "⚖",
};

export default function LeadCard({ lead, statusOptions, onStatusChange, onViewDetails }) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG["Novo"];

  const handleWhatsApp = () => {
    const clean = lead.telefone.replace(/\D/g, "");
    const msg = encodeURIComponent(`Olá ${lead.contato || lead.empresa}! Vi que vocês podem estar precisando de um site profissional...`);
    window.open(`https://wa.me/55${clean}?text=${msg}`, "_blank");
  };

  return (
    <div className="lead-card">
      <div className="lead-card-top">
        <div className="lead-avatar">
          <span>{NICHO_ICONS[lead.nicho] || lead.empresa[0]}</span>
        </div>
        <div className="lead-info">
          <h3 className="lead-name">{lead.empresa}</h3>
          <div className="lead-meta">
            <span className="lead-nicho">{lead.nicho}</span>
            <span className="dot-sep">·</span>
            <span className="lead-cidade">{lead.cidade}</span>
          </div>
        </div>
        <div className={`status-pill ${cfg.color}`}>
          <span className="status-dot" style={{ background: cfg.dot }} />
          {lead.status}
        </div>
      </div>

      <div className="lead-phone">
        <span className="phone-icon">☎</span>
        <span>{lead.telefone}</span>
        {lead.website && (
          <>
            <span className="dot-sep">·</span>
            <span className="website-tag">🔗 {lead.website}</span>
          </>
        )}
      </div>

      {lead.notas && (
        <p className="lead-notes">{lead.notas}</p>
      )}

      <div className="lead-actions">
        <button className="btn-whatsapp" onClick={handleWhatsApp}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.845L.057 23.492a.5.5 0 00.614.614l5.647-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.032-1.374l-.36-.214-3.732.969.992-3.617-.235-.374A9.88 9.88 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118S21.882 6.54 21.882 12 17.46 21.882 12 21.882z"/>
          </svg>
          WhatsApp
        </button>

        <button className="btn-details" onClick={() => onViewDetails(lead)}>
          Ver detalhes
        </button>

        <div className="status-menu-wrap">
          <button
            className="btn-status"
            onClick={() => setShowStatusMenu((p) => !p)}
          >
            Status ▾
          </button>
          {showStatusMenu && (
            <div className="status-dropdown">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  className={`status-option ${lead.status === s ? "active" : ""}`}
                  onClick={() => {
                    onStatusChange(lead.id, s);
                    setShowStatusMenu(false);
                  }}
                >
                  <span className="status-dot" style={{ background: STATUS_CONFIG[s]?.dot }} />
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
