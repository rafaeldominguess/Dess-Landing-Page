import Image from "next/image";
import Button from "../../components/ui/Button/button";

function About() {
    return (
        <section id="about" className="section-shell overflow-hidden w-full py-16 md:py-24">
            <div className="surface-card mx-auto flex max-w-350 flex-col items-center justify-evenly gap-12 rounded-3xl bg-white px-6 py-10 shadow-[0_20px_60px_rgba(98,0,112,0.06)] md:flex-row md:gap-10 md:px-10">
                <section className="animate-fade-up w-full max-w-md flex flex-col gap-6 md:w-160">
                    <div>
                        <h1 className="text-3xl text-(--color) font-bold">Quem é</h1>
                        <span className="font-bold text-5xl text-[#620070]">Ana Fernandes ?</span>
                    </div>
                    <div>
                        <p className="text-[#620070] text-sm md:text-lg leading-relaxed">
                            Ana Fernandez é especialista em design de sobrancelhas com foco em visagismo e naturalidade. Sua trajetória começou pela paixão pela simetria, evoluindo de atendimentos personalizados para a fundação de seu próprio estúdio. Referência em reabilitação de olhares, Ana combina precisão técnica e sensibilidade para criar designs únicos que respeitam a identidade e elevam a autoestima de cada cliente.
                        </p>
                    </div>

                    <div className="text-center md:text-start">
                        <Button>Marcar Consulta</Button>
                    </div>

                </section>

                <section className="flex items-center justify-center animate-fade-up anim-delay-1" >
                    <div>
                        <Image
                            src="/fotoprofissional.jpg"
                            alt="foto da profissional Ana Fernandes"
                            width={300}
                            height={400}
                            className="w-50 h-75 rounded-2xl object-cover shadow-xl shadow-[#620070]/10 md:w-75 md:h-100"
                        />
                    </div>
                </section>

                <section className="hidden md:flex md:flex-col md:gap-12 md:items-center animate-fade-up anim-delay-2" >
                    <div className="text-(--color) text-xl font-bold">
                        Ana Fernandes
                    </div>
                    <div className="flex flex-col gap-8 items-center">
                        <div className="w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-t-60 border-t-[#8B0099]"></div>
                        <div className="w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-t-60 border-t-[#B84CBF]"></div>
                        <div className="w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-t-60 border-t-[#D989DF]"></div>
                        <div className="w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-t-60 border-t-[#E9B8EF]"></div>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default About;