export default function Dashboard({ stats }) {
  const cards = [
    {
      label: "Total de Leads",
      value: stats.total,
      icon: "◈",
      color: "card-blue",
      delta: "+3 esta semana",
    },
    {
      label: "Contatados",
      value: stats.contatados,
      icon: "◎",
      color: "card-indigo",
      delta: `${Math.round((stats.contatados / stats.total) * 100)}% do total`,
    },
    {
      label: "Responderam",
      value: stats.responderam,
      icon: "◉",
      color: "card-amber",
      delta: `${Math.round((stats.responderam / stats.total) * 100)}% de resposta`,
    },
    {
      label: "Fechados",
      value: stats.fechados,
      icon: "◆",
      color: "card-green",
      delta: `${Math.round((stats.fechados / stats.total) * 100)}% de conversão`,
    },
  ];

  return (
    <section className="dashboard-cards">
      {cards.map((card) => (
        <div key={card.label} className={`stat-card ${card.color}`}>
          <div className="stat-card-top">
            <span className="stat-icon">{card.icon}</span>
            <span className="stat-value">{card.value}</span>
          </div>
          <div className="stat-label">{card.label}</div>
          <div className="stat-delta">{card.delta}</div>
          <div className="stat-bar">
            <div
              className="stat-bar-fill"
              style={{ width: `${Math.min((card.value / stats.total) * 100, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
