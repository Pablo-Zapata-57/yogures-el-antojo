import { Leaf, Cherry, Sparkles } from "lucide-react";
const benefits = [
    {
        icon: Leaf,
        title: "100% Natural",
        description: "Sin conservantes, sin colorantes y sin aditivos artificiales. Solo ingredientes que reconoces.",
        color: "bg-primary-soft text-primary",
    },
    {
        icon: Cherry,
        title: "Con Fruta Real",
        description: "Trozos de fruta fresca seleccionada cada mañana. Sabor auténtico en cada cucharada.",
        color: "bg-secondary-soft text-secondary",
    },
    {
        icon: Sparkles,
        title: "Probióticos Activos",
        description: "Cultivos vivos que cuidan tu digestión y fortalecen tu sistema inmune naturalmente.",
        color: "bg-accent text-accent-foreground",
    },
];
const Benefits = () => {
    return (<section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Hecho con amor,{" "}
            <span className="text-primary italic">como debe ser</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Cada frasco lleva nuestra promesa: ingredientes nobles, recetas tradicionales
            y el sabor que recuerdas de la infancia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((b, i) => (<div key={b.title} className="group relative bg-card rounded-2xl p-8 border border-border/60 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`w-14 h-14 rounded-2xl ${b.color} flex items-center justify-center mb-5 transition-bounce group-hover:scale-110 group-hover:rotate-6`}>
                <b.icon className="w-7 h-7" strokeWidth={2}/>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>))}
        </div>
      </div>
    </section>);
};
export default Benefits;
