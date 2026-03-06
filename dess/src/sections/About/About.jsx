import Button from "../../components/ui/Button/button";

function About() {
    return (
        <main className="overflow-hidden w-full max-h-800 py-18">
            <div className="flex max-w-350 mx-auto px-6 items-center justify-around">
                <section className=" flex flex-col gap-6 max-w-md ">
                    <div>
                        <h1 className="text-2xl text-(--color)">Quem é</h1>
                        <span className="font-bold text-4xl text-[#620070]">Ana Fernandes</span>
                    </div>
                    <div>
                        <p className="text-(--color) text-md leading-relaxed">
                            Ana Fernandez é especialista em design de sobrancelhas com foco em visagismo e naturalidade. Sua trajetória começou pela paixão pela simetria, evoluindo de atendimentos personalizados para a fundação de seu próprio estúdio. Referência em reabilitação de olhares, Ana combina precisão técnica e sensibilidade para criar designs únicos que respeitam a identidade e elevam a autoestima de cada cliente.
                        </p>
                    </div>

                    <div>
                        <Button children={"Marcar Consulta"} />
                    </div>

                </section>

                <section>
                    <div>
                        <img src="./fotoprofissional.jpg" alt="foto da profissional Ana Fernandes"
                            width={300}
                            height={300}
                        />
                    </div>
                </section>

                <section>
                    <div className="text-(--color) text-xl font-bold">
                        Ana Fernandes 
                    </div>

                </section>

            </div>
        </main>
    )
}

export default About;