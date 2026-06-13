import heroImg from "@/assets/hero-yogurt.jpg";
const Hero = ({
  title = (<>
      El antojo más <span className="text-primary italic">cremoso</span> del día.
    </>),
  description = "Yogures hechos a mano con leche fresca, fruta real y mucho cariño. Sin conservantes. Sólo sabor de verdad.",
  imageSrc = heroImg,
  primaryLink = "https://wa.me/573046083756?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20Yogures%20el%20Antojo%20🍓",
  primaryLabel = "Pedir por WhatsApp",
  secondaryLink = "#sabores",
  secondaryLabel = "Ver sabores",
}) => {
    return (<section id="inicio" className="relative overflow-hidden gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" aria-hidden/>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" aria-hidden/>

      <div className="container relative grid md:grid-cols-2 gap-10 md:gap-12 items-center py-16 md:py-24 lg:py-28">
        <div className="space-y-6 text-center md:text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            ✨ 100% Artesanal
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-foreground">
            {title}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
            {description}
          </p>  

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-warm text-primary-foreground font-semibold shadow-glow hover:shadow-soft transition-bounce hover:scale-105 w-full sm:w-auto">
              {primaryLabel}
              <span aria-hidden>→</span>
            </a>
            <a href={secondaryLink} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-muted transition-smooth w-full sm:w-auto">
              {secondaryLabel}
            </a>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="text-secondary text-lg">★★★★★</span>
              <span className="font-medium">4.9</span>
            </div>
            <span className="hidden sm:inline">+500 clientes felices</span>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" aria-hidden/>
            <img src={imageSrc} alt="Bowl de yogur artesanal con fresa, mango y granola" width={1280} height={1280} className="relative w-full h-full object-cover rounded-[2.5rem] shadow-card animate-float"/>
            {/* Floating chips */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-card px-4 py-2 rounded-full shadow-soft text-sm font-semibold text-primary border border-primary-soft">
              🍓 Fruta real
            </div>
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-card px-4 py-2 rounded-full shadow-soft text-sm font-semibold text-secondary-foreground border border-secondary-soft">
              🥛 Probióticos
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default Hero;
