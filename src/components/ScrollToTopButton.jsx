import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
const ScrollToTopButton = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (<button onClick={scrollToTop} aria-label="Volver al inicio" className={`fixed bottom-24 right-5 md:bottom-28 md:right-7 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground/70 shadow-soft hover:bg-foreground hover:text-background hover:border-foreground transition-smooth ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <ChevronUp className="w-6 h-6 md:w-7 md:h-7" aria-hidden/>
    </button>);
};
export default ScrollToTopButton;
