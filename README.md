# ProspectFlow CRM — Fase 1

## Estrutura de Pastas

```
crm-prospeccao/
├── preview.html              ← ABRA ESTE para ver imediatamente no browser
├── package.json
├── src/
│   ├── App.jsx               ← Componente raiz
│   ├── index.css             ← Design system completo (CSS variables + classes)
│   ├── data/
│   │   └── mockLeads.js      ← 8 leads mockados
│   └── components/
│       ├── Dashboard.jsx     ← Cards de estatísticas
│       ├── LeadList.jsx      ← Lista com filtros e busca
│       ├── LeadCard.jsx      ← Card individual de lead
│       ├── LeadModal.jsx     ← Modal de detalhes
│       └── Sidebar.jsx       ← Navegação lateral
```

## Como rodar o React

```bash
cd crm-prospeccao
npm install
npm run dev
```

## Preview instantâneo

Abra `preview.html` diretamente no browser — versão HTML pura completa e funcional.

## Features implementadas

- ✅ Dashboard com 4 cards de estatísticas (Total, Contatados, Responderam, Fechados)
- ✅ Barra de progresso animada em cada card
- ✅ Lista de 8 leads mockados com dados reais
- ✅ Filtro por status (abas clicáveis)
- ✅ Busca por empresa, nicho ou cidade
- ✅ Botão WhatsApp (abre app com mensagem pré-formatada)
- ✅ Modal de detalhes completo
- ✅ Dropdown de alteração de status inline
- ✅ Sidebar colapsável (mobile) / fixa (desktop)
- ✅ Design dark premium com tipografia Syne + DM Sans
- ✅ Totalmente responsivo (mobile-first)
