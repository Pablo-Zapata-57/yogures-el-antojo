import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-yogurt.jpg";
import strawberryImg from "@/assets/flavor-strawberry.jpg";
import mangoImg from "@/assets/flavor-mango.jpg";
import blogData from "@/data/blogData.json";

const imageMap = {
  "hero-yogurt.jpg": heroImg,
  "flavor-strawberry.jpg": strawberryImg,
  "flavor-mango.jpg": mangoImg,
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogData.find((item) => item.slug === slug);

    if (!post) {
      return <Navigate to="/blog" replace />;
    }

    return (<div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero
          title={<>{post.title}</>}
          description={post.description}
          imageSrc={imageMap[post.image] ?? heroImg}
          primaryLink="https://wa.me/573046083756?text=Hola!%20Quiero%20saber%20más%20sobre%20el%20blog%20de%20Yogures%20el%20Antojo"
          primaryLabel="Pedir por WhatsApp"
          secondaryLink="#detalle"
          secondaryLabel="Ver detalles"
        />

        <section id="detalle" className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Entrada de blog
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <article className="rounded-3xl bg-card border border-border/70 p-8 shadow-soft">
              <p className="text-muted-foreground leading-relaxed">
                {post.content}
              </p>
            </article>

            <div className="pt-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90 transition-smooth">
                ← Volver al blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);
};
export default BlogPost;
