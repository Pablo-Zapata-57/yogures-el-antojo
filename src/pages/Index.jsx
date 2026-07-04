import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Flavors from "@/components/Flavors";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const Index = () => {
    return (<div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Flavors />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>);
};
export default Index;
