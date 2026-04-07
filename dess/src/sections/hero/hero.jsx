import Image from "next/image";
import Button from "@/components/ui/Button/button";

function Hero() {
    return (
        <section id="hero" className="section-shell relative w-full overflow-hidden py-16 md:py-24">

            <div className="relative mx-auto flex max-w-350 items-center justify-evenly gap-12 px-6">
                <div className="relative animate-soft-float animate-fade-up">

                    <Image
                        src="/foto_hero.jpg"
                        alt="Hero background"
                        width={300}
                        height={100}
                        quality={100}
                        priority
                        className="relative h-75 w-50 rounded-2xl object-cover shadow-xl shadow-[#620070]/10 md:h-100 md:w-75"
                    />

                </div>

                <div className="max-w-md text-(--color-servicesheader) animate-fade-up anim-delay-1">
                    {/* Linha decorativa superior */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-(--color)"></div>
                        <span className="text-sm font-semibold text-(--color) uppercase tracking-wider">Studio de Design</span>
                    </div>

                    <h1 className="text-4xl font-extrabold mb-6 leading-tight md:text-5xl">
                        O olhar que reflete a sua <span className="text-(--color) relative">
                            melhor versão

                        </span>
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed">
                        Mais do que um design, busco realçar a harmonia do seu rosto e a força da sua
                        expressão. No Studio, cada detalhe é pensado para que você se sinta ainda mais
                        confiante e radiante. Agende seu horário e permita-se esse cuidado.
                    </p>

                    <div className="flex items-center gap-4 animate-fade-up anim-delay-2">
                        <Button href="#contact">Entrar em contato</Button>
                        <div className="flex gap-2">
                            <div className="status-orb h-2 w-2 rounded-full bg-purple-900"></div>
                            <div className="status-orb h-2 w-2 rounded-full bg-purple-600 anim-delay-1"></div>
                            <div className="status-orb h-2 w-2 rounded-full bg-purple-500 anim-delay-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;