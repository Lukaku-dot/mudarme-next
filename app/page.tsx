import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import CoverageArea from "@/components/CoverageArea";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogPreview from "@/components/BlogPreview";
import ZonasPreview from "@/components/ZonasPreview";
import ZonasPreview from "@/components/ZonasPreview";

export const metadata = {
  title: "Mudanzas y Guardamuebles en CABA y GBA | La Mudanza +30 años",
  description: "La Mudanza: mudanzas residenciales, comerciales y guardamuebles en CABA y GBA. +30 años de experiencia. Presupuesto sin cargo.",
  alternates: { canonical: "https://www.mudarme.com.ar" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTASection />
        <QuoteForm />
        <CoverageArea />
      </main>
      <ZonasPreview />
      <ZonasPreview />
      <BlogPreview />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
