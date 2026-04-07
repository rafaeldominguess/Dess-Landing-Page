import Header from "@/components/shared/NavBar/header";
import Hero from "@/sections/hero/hero";
import About from "@/sections/About/About";
import Services from "@/sections/Services/Services";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";

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
