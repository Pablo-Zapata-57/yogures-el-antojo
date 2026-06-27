import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-yogurt-2.png";
import blogData from "@/data/blogData.json";
import section1Img from "@/assets/seccion-1-blog.png";
import section2Img from "@/assets/seccion-2-blog.png";
import section3Img from "@/assets/seccion-3-blog.png";
import section4Img from "@/assets/seccion-4-blog.png";
import section5Img from "@/assets/seccion-5-blog.png";
import section6Img from "@/assets/seccion-6-blog.png";

const imageMap = {
  "seccion-1-blog.png": section1Img,
  "seccion-2-blog.png": section2Img,
  "seccion-3-blog.png": section3Img,
  "seccion-4-blog.png": section4Img,
  "seccion-5-blog.png": section5Img,
  "seccion-6-blog.png": section6Img,
};

const Blog = () => {
    return (<div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero
          title={<>Blog de <span className="text-primary italic">Yogures el Antojo</span></>}
          description="Historias del sabor, consejos saludables y todo lo que hay detrás de nuestros yogures artesanales."
          imageSrc={heroImg}
          primaryLink="https://wa.me/573046083756?text=Hola!%20Quiero%20leer%20el%20blog%20de%20Yogures%20el%20Antojo"
          primaryLabel="Contactar por WhatsApp"
          secondaryLink="#entradas"
          secondaryLabel="Ver entradas"
        />

        <section id="entradas" className="container py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Historias y consejos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
              Explora nuestras entradas y descubre más sobre cada sabor.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Lee artículos breves sobre ingredientes, procesos artesanales y los beneficios de nuestros yogures naturales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogData.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block overflow-hidden rounded-[2rem] bg-card border border-border/70 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary/50">
                <img src={imageMap[post.image]} alt={post.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                    Blog
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-foreground mt-4 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth">
                    Leer artículo
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);
};
export default Blog;
