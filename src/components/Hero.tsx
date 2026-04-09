export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full z-10">
        <h1 className="font-headline font-black text-6xl md:text-8xl leading-none tracking-tighter mb-8 text-on-surface">
          Desenvolvedor <span className="text-primary text-glow-primary">Fullstack</span> focada em sistemas de alta disponibilidade.
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
          Especialista em PHP/Laravel e infraestrutura, transformando regras de negócio complexas em software resiliente pronto para produção.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            className="bg-primary text-on-primary text-center px-10 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
            href="#projects"
          >
            Ver projetos
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            className="border border-outline-variant text-on-surface text-center px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all"
            href="#contact"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute -right-20 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-10 bottom-10 hidden lg:block opacity-20">
        <span
          className="material-symbols-outlined text-[20rem] text-primary"
          style={{ fontVariationSettings: "'wght' 100" }}
        >
          database
        </span>
      </div>
    </header>
  );
}
