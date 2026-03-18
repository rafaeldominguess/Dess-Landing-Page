import Button from "@/components/ui/Button/button";
import Image from "next/image";

function Hero() {
    return (
        <main className="relative w-full overflow-hidden">

            <div className="relative max-w-350 flex justify-evenly items-center mx-auto py-18 px-6">
                <div className="relative">

                    <Image
                        src="/foto_hero.jpg"
                        alt="Hero background"
                        width={300}
                        height={100}
                        quality={100}
                        priority
                        className="object-cover rounded-md w-50 h-75 md:w-75 md:h-100 relative"
                    />

                </div>

                <div className="max-w-md text-(--color-servicesheader)">
                    {/* Linha decorativa superior */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-(--color)"></div>
                        <span className="text-sm font-semibold text-(--color) uppercase tracking-wider">Studio de Design</span>
                    </div>

                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        O olhar que reflete a sua <span className="text-(--color) relative">
                            melhor versão

                        </span>
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed">
                        Mais do que um design, busco realçar a harmonia do seu rosto e a força da sua
                        expressão. No Studio, cada detalhe é pensado para que você se sinta ainda mais
                        confiante e radiante. Agende seu horário e permita-se esse cuidado.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button>ENTRAR EM CONTATO</Button>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-purple-900 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse  delay-100"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero;