const diferenciais = [
  {
    icon: 'verified_user',
    title: 'Foco em Produção',
    description: 'Sistemas arquitetados para resiliência e alta carga, com monitoramento e deploys previsíveis.',
  },
  {
    icon: 'terminal',
    title: 'Infraestrutura Própria',
    description: 'Domínio de Docker, Nginx e Linux para garantir autonomia completa sobre o ambiente de execução.',
  },
  {
    icon: 'architecture',
    title: 'Engenharia de Dados',
    description: 'Modelagem avançada em PostgreSQL e APIs robustas seguindo padrões internacionais de arquitetura.',
  },
  {
    icon: 'analytics',
    title: 'Pragmatismo Técnico',
    description: 'Escolhas tecnológicas guiadas por performance real e manutenção sustentável no longo prazo.',
  },
];

export default function Diferenciais() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — List */}
        <div>
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-8 tracking-tight text-balance hyphens-auto">
            O Diferencial de quem <span className="text-primary">entrega</span>.
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Não apenas linhas de código, mas ativos digitais pensados para o negócio.
          </p>
          <div className="space-y-8">
            {diferenciais.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quote Card */}
        <div className="bg-surface-container-low p-6 sm:p-12 rounded-xl relative overflow-hidden flex flex-col justify-center">
          <div className="z-10">
            <span
              className="text-primary material-symbols-outlined text-6xl mb-6 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <h3 className="text-3xl font-bold mb-4 italic">
              "Maturidade técnica é garantir que o sistema não falhe quando o usuário mais precisa."
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Priorizo arquiteturas que permitem ao seu negócio crescer sem precisar reescrever toda a base tecnológica a cada ciclo de expansão.
            </p>
          </div>
          {/* Background Pattern */}
          <div className="absolute -bottom-10 -right-10 opacity-5">
            <span className="material-symbols-outlined text-[15rem]">architecture</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
