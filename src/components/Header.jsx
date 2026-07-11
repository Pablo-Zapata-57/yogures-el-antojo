import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import logo from "@/assets/logo-Yogures-el-antojo-2.jpg";

const sections = [
  { to: "/#inicio", label: "Inicio", activeIf: (p, h) => p === "/" && (!h || h === "" || h === "#inicio"), isHash: true },
  { to: "/#beneficios", label: "Beneficios", activeIf: (p, h) => h === "#beneficios", isHash: true },
  { to: "/#sabores", label: "Sabores", activeIf: (p, h) => h === "#sabores", isHash: true },
  { to: "/blog", label: "Blog", activeIf: (p, h) => p.startsWith("/blog") },
  { to: "/#contacto", label: "Contacto", activeIf: (p, h) => h === "#contacto", isHash: true },
];

const Header = () => {
    const { pathname, hash } = useLocation();
    const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);
    return (<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:h-20 md:py-0">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo Yogures el Antojo" width={64} height={64} className="w-16 h-16 md:w-20 md:h-20 object-contain transition-bounce group-hover:scale-110"/>
          <div className="leading-tight">
            <h1 className="font-display text-lg md:text-xl font-semibold text-foreground">
              Yogures <span className="text-primary">el Antojo</span>
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
              Artesanales · Naturales
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium md:flex-1">
          {sections.map(({ to, label, activeIf, isHash }) => {
            const active = activeIf(pathname, hash);
            const className = `transition-smooth ${active ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"}`;
            return isHash
              ? <a key={to} href={to} className={className}>{label}</a>
              : <Link key={to} to={to} className={className}>{label}</Link>;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark((d) => !d)} aria-label={dark ? "Modo claro" : "Modo oscuro"} className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="/#sabores" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-warm text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-0.5">
            Pedir ahora
          </a>
        </div>
      </div>
    </header>);
};
export default Header;
