const stackItems = [
  { icon: 'php', name: 'PHP', label: 'Robust Backend' },
  { icon: 'api', name: 'Laravel', label: 'Enterprise Framework' },
  { icon: 'database', name: 'PostgreSQL', label: 'Relational Architecture' },
  { icon: 'terminal', name: 'Docker', label: 'Deployment Consistency' },
  { icon: 'dns', name: 'Nginx', label: 'High-Performance Proxy' },
  { icon: 'cloud_sync', name: 'APIs REST', label: 'System Integration' },
  { icon: 'account_tree', name: 'Git', label: 'Source Control' },
  { icon: 'settings_ethernet', name: 'VPS/Linux', label: 'Bare Metal Infra' },
];

export default function Stack() {
  return (
    <section className="py-32 bg-surface" id="stack">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 tracking-tight text-balance hyphens-auto">
          Tecnologias de Produção
        </h2>
        <p className="text-on-surface-variant text-lg">
          Ferramentas selecionadas com base em critérios rigorosos de performance, escalabilidade e maturidade de ecossistema.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="bg-surface-container-low p-8 rounded-xl tonal-lift border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
              {item.icon}
            </span>
            <h3 className="font-bold text-xl mb-2">{item.name}</h3>
            <p className="text-on-surface-variant text-sm">{item.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
