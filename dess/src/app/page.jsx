import Header from "@/components/shared/NavBar/header";
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/Services/Services";

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Ana Fernandes Studio",
    image: "https://www.anafernandesstudio.com.br/foto_hero.jpg",
    description:
      "Estúdio especializado em design de sobrancelhas com foco em visagismo, simetria e naturalidade.",
    telephone: "+55 51 99999-1234",
    email: "contato@anafernandesstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua das Flores, 245 - Centro",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    areaServed: "Porto Alegre e região",
    url: "https://www.anafernandesstudio.com.br",
  };

  return (
    <main className="w-full overflow-x-hidden">
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
