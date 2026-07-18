import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo-Yogures-el-antojo-2.jpg";
const TikTokIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M221.07 79.34c-10.34-4.74-21.47-7.5-33.05-7.5h-.1a72.87 72.87 0 0 1-24.21-3.66v81.42c0 28.3-22.96 51.26-51.27 51.26-27.57 0-50.05-22.15-51.22-49.53v-58.79H85.59a51.2 51.2 0 1 0 68.78 48.12V68.97c14.46 5.92 30.29 9.36 46.57 9.36 1.23 0 2.45-.03 3.67-.1Zm-64.18 96.45v-7.5a27.14 27.14 0 0 1 0 7.5Zm0 0"/>
  </svg>
);
const Footer = () => {
    return (<footer className="bg-cream-deep/50 border-t border-border/60 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" loading="lazy"/>
              <div>
                <p className="font-display font-semibold text-foreground">Yogures el Antojo</p>
                <p className="text-xs text-muted-foreground">Artesanal · Hecho con amor</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition hover:border-primary hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition hover:border-primary hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Remedios, La Cruzada, Segovia
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-smooth">Inicio</a>
            <a href="#beneficios" className="hover:text-primary transition-smooth">Beneficios</a>
            <a href="#sabores" className="hover:text-primary transition-smooth">Sabores</a>
            <Link to="/blog" className="hover:text-primary transition-smooth">Blog</Link>
            <a href="#contacto" className="hover:text-primary transition-smooth">Contacto</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Desarrollado por <span className="font-semibold">Pablo Zapata</span>
          </p>
        </div>
      </div>
    </footer>);
};
export default Footer;
