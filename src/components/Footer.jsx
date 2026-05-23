import logo from "@/assets/logo.png";
const Footer = () => {
    return (<footer className="bg-cream-deep/50 border-t border-border/60 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" loading="lazy"/>
            <div>
              <p className="font-display font-semibold text-foreground">Yogures el Antojo</p>
              <p className="text-xs text-muted-foreground">Artesanal · Hecho con amor</p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#beneficios" className="hover:text-primary transition-smooth">Beneficios</a>
            <a href="#sabores" className="hover:text-primary transition-smooth">Sabores</a>
            <a href="#contacto" className="hover:text-primary transition-smooth">Contacto</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Yogures el Antojo
          </p>
        </div>
      </div>
    </footer>);
};
export default Footer;
