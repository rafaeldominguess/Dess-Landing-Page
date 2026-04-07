import Image from "next/image";
import Button from "@/components/ui/Button/button";

function Services() {
  return (
    <section
      id="services"
      className="section-shell overflow-hidden py-16 md:py-24 flex justify-center"
    >
      <div className="mx-auto max-w-350 px-6 text-center animate-fade-up">
        <h2 className="mb-2 text-4xl font-bold text-[#620070]">
          Nossos Procedimentos
        </h2>
        <p className="text-(--color) text-lg md:text-xl leading-relaxed">
          "O cuidado que o seu olhar merece. Conheça nossos procedimentos
          especializados em design, simetria e saúde das sobrancelhas."
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="surface-card max-w-xl rounded-3xl bg-white p-6 text-left shadow-[0_20px_60px_rgba(98,0,112,0.06)] md:p-8 animate-fade-up anim-delay-1">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 bg-(--color) rounded-full mt-1 shrink-0"></div>
                <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                  Procedimento de design de sobrancelhas personalizado
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 bg-(--color) rounded-full mt-1 shrink-0"></div>
                <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                  Tratamento de saúde das sobrancelhas
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 bg-(--color) rounded-full mt-1 shrink-0"></div>
                <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                  Simetria e harmonia no design das sobrancelhas
                </p>
              </li>
              <li className="flex items-start gap-3 mb-8">
                <div className="w-4 h-4 bg-(--color) rounded-full mt-1 shrink-0"></div>
                <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                  Consultoria personalizada para realçar a beleza natural do seu
                  olhar
                </p>
              </li>
              <Button href="#contact">Marcar um horário</Button>
            </ul>
          </div>
          <div className="flex items-end justify-center gap-2 animate-fade-up anim-delay-2">
            <Image
              className="h-70 w-30 rounded-2xl object-cover shadow-lg shadow-[#620070]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              src="/servico1.jpg"
              alt="Procedimento de sobrancelhas 1"
              width={240}
              height={560}
            />
            <Image
              className="h-65 w-28 rounded-2xl object-cover shadow-lg shadow-[#620070]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              src="/servico2.jpg"
              alt="Procedimento de sobrancelhas 2"
              width={224}
              height={520}
            />
            <Image
              className="h-60 w-26 rounded-2xl object-cover shadow-lg shadow-[#620070]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              src="/servico3.jpg"
              alt="Procedimento de sobrancelhas 3"
              width={208}
              height={480}
            />
            <Image
              className="h-55 w-24 rounded-2xl object-cover shadow-lg shadow-[#620070]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              src="/servico4.jpg"
              alt="Procedimento de sobrancelhas 4"
              width={192}
              height={440}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
