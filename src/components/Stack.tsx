const stackItems = [
  { icon: 'php', name: 'PHP', label: 'Backend Engine' },
  { icon: 'api', name: 'Laravel', label: 'Fullstack Framework' },
  { icon: 'database', name: 'PostgreSQL', label: 'Data Persistence' },
  { icon: 'terminal', name: 'Docker', label: 'Containerization' },
  { icon: 'dns', name: 'Nginx', label: 'Web Server' },
  { icon: 'cloud_sync', name: 'APIs REST', label: 'Communication' },
  { icon: 'account_tree', name: 'Git', label: 'Version Control' },
  { icon: 'settings_ethernet', name: 'VPS/Linux', label: 'Infrastructure' },
];

export default function Stack() {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface" id="stack">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 tracking-tight">
          The Modern Stack
        </h2>
        <p className="text-on-surface-variant text-lg">
          Ferramentas selecionadas para construir software de alta performance e manutenção sustentável.
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
    </section>
  );
}
