import Button from "../../components/ui/Button/button";

function About() {
    return (
        <main className="overflow-hidden w-full max-h-800 py-18">
            <div className="md:flex max-w-350 mx-auto px-6 items-center justify-evenly bg-gray-100 rounded-md py-10">
                <section className=" w-full md:w-160 flex flex-col gap-6 max-w-md ">
                    <div>
                        <h1 className="text-2xl text-(--color) font-bold">Quem é</h1>
                        <span className="font-bold text-4xl text-[#620070]">Ana Fernandes</span>
                    </div>
                    <div>
                        <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                            Ana Fernandez é especialista em design de sobrancelhas com foco em visagismo e naturalidade. Sua trajetória começou pela paixão pela simetria, evoluindo de atendimentos personalizados para a fundação de seu próprio estúdio. Referência em reabilitação de olhares, Ana combina precisão técnica e sensibilidade para criar designs únicos que respeitam a identidade e elevam a autoestima de cada cliente.
                        </p>
                    </div>

                    <div className="text-center md:text-start">
                        <Button children={"Marcar Consulta"} />
                    </div>

                </section>

                <section className="flex justify-center items-center py-18" >
                    <div className=" ">
                        <img src="./fotoprofissional.jpg" alt="foto da profissional Ana Fernandes"
                        quality={100}
                        className="w-50 h-75 md:w-75 md:h-100 rounded-md"
                        />
                    </div>
                </section>

                <section className=" hidden md:flex md:flex-col md:gap-12 md:items-center" >
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
        </main>
    )
}

export default About;