import Header from "@/components/shared/NavBar/header";
import Hero from "@/sections/hero/hero";
import About from "@/sections/About/About";
import Services from "@/sections/Services/Services";


export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
