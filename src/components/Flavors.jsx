import { Link } from "react-router-dom";
import strawberry from "@/assets/Yogurt-de-fresa.jpg.jpeg";
import mango from "@/assets/Yogurt-de-mora.jpg.jpeg";
import blueberry from "@/assets/Yogurt-de-maracuyá.jpg.jpeg";
import peach from "@/assets/Yogurt-de-piña.jpg.jpeg";
import natural from "@/assets/Yogurt-de-guanabana.jpg.jpeg";
import passion from "@/assets/Yogurt-kumis.jpg.jpeg";
const flavors = [
    { slug: "fresa", name: "Fresa", description: "Un clásico que combina la dulzura natural de la fresa con la textura cremosa de nuestro yogur. Cada cucharada trae trozos reales de fruta que se funden con la base láctea para un sabor fresco y reconfortante.", img: strawberry, tag: "Best seller" },
    { slug: "mora", name: "Mora", description: "Un sabor vibrante que despierta el paladar con notas ácidas y dulces. Nuestro yogur de mora está hecho con fruta madura de verdad para ofrecer una experiencia intensa y llena de energía.", img: mango, tag: "Favorito" },
    { slug: "maracuya", name: "Maracuyá", description: "Exótico y refrescante, este sabor ofrece el equilibrio perfecto entre acidez y cremosidad. Es la opción ideal para quienes buscan un toque tropical sin perder la suavidad del yogur artesanal.", img: blueberry, tag: null },
    { slug: "pina", name: "Piña", description: "Jugoso y delicado, con el aroma natural de la fruta tropical. La piña aporta una sensación ligera y dulce que transforma cada cucharada en un momento fresco y delicioso.", img: peach, tag: null },
    { slug: "guanabana", name: "Guanábana", description: "Cremoso y suave, con un toque sutil de dulzura natural. La guanábana se integra perfectamente con nuestra base de yogur para ofrecer un sabor delicado y reconfortante.", img: natural, tag: "Clásico" },
    { slug: "kumis", name: "Kumis", description: "Una experiencia auténtica y diferente, con matices fermentados y un toque refrescante. Este sabor rinde homenaje a las tradiciones lácteas mientras sigue siendo ligero y muy sabroso.", img: passion, tag: "Nuevo" },
];
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
          {flavors.map((f) => (<Link key={f.name} to={`/producto/${f.slug}`} className="group block bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-2">
              <div className="relative aspect-square overflow-hidden bg-cream">
                <img src={f.img} alt={`Yogur sabor ${f.name}`} width={768} height={768} loading="lazy" className="w-full h-full object-cover transition-bounce group-hover:scale-110"/>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {f.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {f.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-smooth">
                  Ver producto
                  <span aria-hidden>→</span>
                </div>
              </div>
            </Link>))}
        </div>
      </div>
    </section>);
};
export default Flavors;
