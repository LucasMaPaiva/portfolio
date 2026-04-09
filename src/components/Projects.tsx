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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHgJGNc0nv859BImVOM6sxx_Jvc-4U8GHcZaJwNa20O0wLK-DjHp9yX1MR4Y1Of4kldB7QjPspwakuxuKtIG13lmFruPQugW9Dcc6E1EV8pJmjG4EtDqbLTGwI62hkwXji_SsA25KVv14OzEwTbgPm_4K__Ong-m16Du9QaQPktfb55XQYysNYqOtokb_j73Qrd43MP6iDcxw3Qy109TA6WtzTBtJZ-FvfOoGQMCXSnTaxVkQ-zCAii4hnoCI7FmpsQ0hC0zghbpka"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-12 flex flex-col justify-end">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Case Principal</span>
            <h3 className="text-4xl font-bold mb-4">H7 Escalas</h3>
            <p className="text-on-surface-variant text-lg max-w-xl mb-6">
              Plataforma robusta para gestão de escalas complexas em ambientes corporativos. Construída com Laravel, PostgreSQL e containers Docker para deploy resiliente.
            </p>
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACv1WiU-HZUVcRfoyL30FlY3EQZ0Gf-owrOhcXkALYTQZ5bz1uC-jMhbautJDStMzLxA0EkawHW9hFUpq-D0uzL0rAqmo6kYqFL3GNWdtQJIBGGfAYQ6Nq-O4sWbOnbDWivk08A1BkSnMk2I3nXX-YrryXjBG-Qm1y9AIl5-4hDthVbeZTvCq5dGOpCEg5TJ__MjOpOY_zjP3EBmjnH2bsqsws5xaYM68t1LCbodNhZaKcTswzgxzBe26Zu0sUM09lLUEzaEEAIDmu"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent p-12 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">Dois90</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Landing page comercial de alta conversão. Foco absoluto em Core Web Vitals e performance bruta.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 text-sm hover:underline" href="#">
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
