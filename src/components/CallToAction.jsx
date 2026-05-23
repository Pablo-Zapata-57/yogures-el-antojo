const CallToAction = () => {
    return (<section id="contacto" className="py-20 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-warm p-10 md:p-16 text-center shadow-card">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" aria-hidden/>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" aria-hidden/>

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              ¿Listo para tu próximo antojo?
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-base md:text-lg">
              Hacemos entregas a domicilio todos los días. Pide ahora por WhatsApp y recíbelo fresquito.
            </p>
            <a href="https://wa.me/573000000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20🍓" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-semibold shadow-glow hover:scale-105 transition-bounce">
              Pedir ahora por WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);
};
export default CallToAction;
