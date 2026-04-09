export default function Projects() {
  return (
    <section className="py-32 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto px-8">
      <h2 className="font-headline font-bold text-4xl md:text-5xl mb-16 tracking-tight text-center md:text-left">
        Casos de Sucesso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Project — H7 Escalas */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high aspect-[16/9] md:aspect-auto">
          <img
            alt="H7 Escalas Dashboard — enterprise scheduling platform"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            src="/projects/h7.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-12 flex flex-col justify-end">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Case Principal</span>
            <h3 className="text-4xl font-bold mb-4">H7 Escalas</h3>
            <p className="text-on-surface-variant text-lg max-w-xl mb-6">
              Sistema robusto de gestão de escalas operacionais. A plataforma automatiza logs e coordenação de times em tempo real, integrando regras complexas via Laravel em infraestrutura Docker.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 text-sm hover:underline mb-8" href="https://plataforma.h7-escalas.com.br">
              Ver projeto
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <div className="flex flex-wrap gap-3">
              {['LARAVEL', 'POSTGRESQL', 'DOCKER'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full bg-surface text-on-surface text-xs font-bold border border-outline-variant/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 — Dois90 */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high">
          <img
            alt="Dois90 — high-performance commercial landing page"
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            src="/projects/dois90.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent p-12 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">Dois90</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Vitrine digital de alta performance. Foco absoluto em Core Web Vitals e SEO técnico para garantir autoridade e conversão em ambiente comercial.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 text-sm hover:underline" href="https://dois90.com.br">
              Visualizar Case
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
