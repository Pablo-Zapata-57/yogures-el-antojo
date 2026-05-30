import logo from "@/assets/logo-Yogures-el-antojo-2.jpg";
const Header = () => {
    return (<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo Yogures el Antojo" width={64} height={64} className="w-16 h-16 md:w-20 md:h-20 object-contain transition-bounce group-hover:scale-110"/>
          <div className="leading-tight">
            <h1 className="font-display text-lg md:text-xl font-semibold text-foreground">
              Yogures <span className="text-primary">el Antojo</span>
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
              Artesanales · Naturales
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#beneficios" className="text-foreground/80 hover:text-primary transition-smooth">Beneficios</a>
          <a href="#sabores" className="text-foreground/80 hover:text-primary transition-smooth">Sabores</a>
          <a href="#contacto" className="text-foreground/80 hover:text-primary transition-smooth">Contacto</a>
        </nav>

        <a href="#sabores" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-warm text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-0.5">
          Pedir ahora
        </a>
      </div>
    </header>);
};
export default Header;
