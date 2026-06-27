import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-yogurt-2.png";
import section1Img from "@/assets/seccion-1-blog.png";
import section2Img from "@/assets/seccion-2-blog.png";
import section3Img from "@/assets/seccion-3-blog.png";
import section4Img from "@/assets/seccion-4-blog.png";
import section5Img from "@/assets/seccion-5-blog.png";
import section6Img from "@/assets/seccion-6-blog.png";
import blogData from "@/data/blogData.json";

const imageMap = {
  "seccion-1-blog.png": section1Img,
  "seccion-2-blog.png": section2Img,
  "seccion-3-blog.png": section3Img,
  "seccion-4-blog.png": section4Img,
  "seccion-5-blog.png": section5Img,
  "seccion-6-blog.png": section6Img,
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
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mt-6 first:mt-0">
                  {paragraph}
                </p>
              ))}
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
