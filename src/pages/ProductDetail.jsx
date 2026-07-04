import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import fresaImg from "@/assets/Yogurt-de-fresa.jpg.jpeg";
import moraImg from "@/assets/Yogurt-de-mora.jpg.jpeg";
import maracuyaImg from "@/assets/Yogurt-de-maracuyá.jpg.jpeg";
import pinaImg from "@/assets/Yogurt-de-piña.jpg.jpeg";
import guanabanaImg from "@/assets/Yogurt-de-guanabana.jpg.jpeg";
import kumisImg from "@/assets/Yogurt-kumis.jpg.jpeg";
import productData from "@/data/productData.json";

const imageMap = {
  "Yogurt-de-fresa.jpg.jpeg": fresaImg,
  "Yogurt-de-mora.jpg.jpeg": moraImg,
  "Yogurt-de-maracuyá.jpg.jpeg": maracuyaImg,
  "Yogurt-de-piña.jpg.jpeg": pinaImg,
  "Yogurt-de-guanabana.jpg.jpeg": guanabanaImg,
  "Yogurt-kumis.jpg.jpeg": kumisImg,
};

const formatPrice = (price) =>
  `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} COP`;

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData.find((item) => item.slug === slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[1] ?? null);

  const buildWaLink = (product, size) => {
    const msg = `Hola! Me interesa el yogur de ${product.name}

${product.description}

Talla: ${size.name} (${size.label})
Precio: ${formatPrice(size.price)}`;
    return `https://wa.me/573046083756?text=${encodeURIComponent(msg)}`;
  };

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const relatedProducts = productData.filter((p) =>
    product.relatedSlugs.includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream shadow-soft">
              <img
                src={imageMap[product.image]}
                alt={`Yogur sabor ${product.name}`}
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {product.tag && (
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {product.tag}
                </span>
              )}

              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Yogur de {product.name}
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-3">
                  Tamaño
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-smooth ${
                        selectedSize?.name === size.name
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {size.name}
                      <span className="block text-xs font-normal mt-0.5 opacity-70">
                        {size.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-foreground">
                  {formatPrice(selectedSize?.price ?? product.sizes[1].price)}
                </span>
                <span className="text-sm text-muted-foreground">/ unidad</span>
              </div>

              <a
                href={buildWaLink(product, selectedSize ?? product.sizes[1])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full gradient-warm text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-bounce px-8 py-4 text-base"
              >
                Pedir por WhatsApp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.358l.36.572-1.034 3.773 3.872-1.015zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="container pb-20 md:pb-28">
            <div className="max-w-2xl text-center mx-auto mb-14 md:mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                También te puede gustar
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
                Productos relacionados
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/producto/${rp.slug}`}
                  className="group block bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden bg-cream">
                    <img
                      src={imageMap[rp.image]}
                      alt={`Yogur sabor ${rp.name}`}
                      width={768}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover transition-bounce group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {rp.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-smooth">
                      Ver producto
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="container pb-20">
          <Link
            to="/#sabores"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90 transition-smooth"
          >
            ← Volver a sabores
          </Link>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
