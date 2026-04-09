export default function About() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Column */}
        <div className="relative">
          <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden relative group">
            <img
              alt="Modern dark coding workspace with multiple monitors displaying lines of PHP and Laravel code"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFeN5KFKLS27bjVcuz01GCl3Nrrv8HG9IVC_r602k9PTTClRzwdyNnVEf4kbTJetG22ty8nnwHU_nMgEmtvwWFuJW7NR4jhVsplDwf0OfjFuqODn5QAt9rh3CJ-ySQoIPa92R59gNg3bkF5N5WO4wpVHoVSSs_2fRTtOQ6W4msipUOFM7cH2KLZ3zUv3KSraNlPTwhgdx7GQkCCecHhQ6tkTy0BgTv5rWSgb_ih2owDJIQSeHWokiXIAtQGJ8zJbI04S_CoBTfCP6c"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg shadow-2xl hidden md:block">
            <p className="text-on-primary font-black text-4xl tracking-tighter">4 ANOS</p>
            <p className="text-on-primary font-bold text-sm uppercase tracking-widest">Experiência Real</p>
          </div>
        </div>

        {/* Text Column */}
        <div>
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-8 tracking-tight text-on-surface">
            Arquitetura que <span className="text-primary">escala</span>.
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Minha abordagem ao desenvolvimento é guiada pelo pragmatismo e rigor técnico. Não projeto apenas sistemas que funcionam; modelo arquiteturas que prosperam sob carga real em ambientes de produção.
            </p>
            <p>
              Com domínio profundo do ecossistema{' '}
              <span className="text-on-surface font-semibold underline decoration-primary/40">PHP/Laravel</span>, projeto APIs RESTful escaláveis e estruturas de dados otimizadas em{' '}
              <span className="text-on-surface font-semibold underline decoration-primary/40">PostgreSQL</span>.
            </p>
            <p>
              Entendo que o software só é completo quando está devidamente provisionado. Por isso, utilizo{' '}
              <span className="text-on-surface font-semibold underline decoration-primary/40">Docker</span> e infraestrutura Linux para garantir que o deploy seja previsível e o ambiente, resiliente. Atualmente, foco em levar a inteligência artificial para o nível prático da engenharia de software.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
