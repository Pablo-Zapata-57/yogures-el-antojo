import strawberry from "@/assets/flavor-strawberry.jpg";
import mango from "@/assets/flavor-mango.jpg";
import blueberry from "@/assets/flavor-blueberry.jpg";
import peach from "@/assets/flavor-peach.jpg";
import natural from "@/assets/flavor-natural.jpg";
import passion from "@/assets/flavor-passion.jpg";
const flavors = [
    { name: "Fresa", description: "Dulce y cremoso, con trozos de fresa fresca.", img: strawberry, tag: "Best seller" },
    { name: "Mango", description: "Tropical y vibrante, mango maduro 100% natural.", img: mango, tag: "Favorito" },
    { name: "Arándanos", description: "Antioxidantes en cada cucharada.", img: blueberry, tag: null },
    { name: "Durazno", description: "Suave, jugoso y reconfortante.", img: peach, tag: null },
    { name: "Natural con Miel", description: "Yogur clásico con miel pura y granola.", img: natural, tag: "Clásico" },
    { name: "Maracuyá", description: "Intenso y refrescante, una explosión cítrica.", img: passion, tag: "Nuevo" },
];
const buildWaLink = (flavor) => `https://wa.me/573046083756?text=${encodeURIComponent(`Hola! Quiero pedir el yogur de ${flavor} 🥄`)}`;
const Flavors = () => {
    return (<section id="sabores" className="py-20 md:py-28 gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Nuestra carta
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Sabores para{" "}
            <span className="text-primary italic">enamorarte</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Seis recetas únicas elaboradas en pequeños lotes para que llegue siempre fresco.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {flavors.map((f) => (<article key={f.name} className="group bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-2">
              <div className="relative aspect-square overflow-hidden bg-cream">
                <img src={f.img} alt={`Yogur sabor ${f.name}`} width={768} height={768} loading="lazy" className="w-full h-full object-cover transition-bounce group-hover:scale-110"/>
                {f.tag && (<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-soft">
                    {f.tag}
                  </span>)}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {f.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {f.description}
                </p>
                <a href={buildWaLink(f.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-smooth">
                  Pedir este sabor
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>))}
        </div>
      </div>
    </section>);
};
export default Flavors;
