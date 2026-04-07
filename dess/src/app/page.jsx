import Header from "@/components/shared/NavBar/header";
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/Services/Services";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
