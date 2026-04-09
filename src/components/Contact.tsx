export default function Contact() {
  return (
    <section
      className="py-32 bg-surface-container-lowest border-t border-outline-variant/15"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline font-black text-5xl md:text-7xl mb-8 tracking-tighter">
          Pronto para <span className="text-primary">escalar?</span>
        </h2>
        <p className="text-2xl text-on-surface-variant mb-12">
          Disponível para oportunidades remotas de alto impacto e consultorias técnicas de backend.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <a
            className="flex items-center gap-4 text-xl hover:text-primary transition-colors"
            href="https://wa.me/5595991227072"
          >
            <span className="material-symbols-outlined">call</span>
            (95) 99122-7072
          </a>
          <div className="hidden md:block w-2 h-2 rounded-full bg-outline-variant" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase">Disponível para oportunidades</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            href="https://www.linkedin.com/in/lucas-paiva-613366209/"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined">link</span>
          </a>
          <a
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            href="https://github.com/LucasMaPaiva"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-95"
            href="#"
            aria-label="Compartilhar"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
