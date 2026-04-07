function Services() {
    return (
        <main className="overflow-hidden max-h-800 py-18">

            <div className="max-w-350 mx-auto text-center">
                <h1 className="font-bold text-4xl text-[#620070] mb-2">Nossos Procedimentos</h1>
                <p className="text-(--color) text-sm md:text-lg leading-relaxed">
                    "O cuidado que o seu olhar merece. Conheça nossos procedimentos especializados em design, simetria e saúde das sobrancelhas."
                </p>

                <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-10">
                    <div className="max-w-xl">
                        <ul className="space-y-4 text-left">
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
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <img className="w-24 h-56 object-cover" src="servico1.jpg" alt="Procedimento de sobrancelhas 1" />
                        <img className="w-24 h-56 object-cover" src="servico2.jpg" alt="Procedimento de sobrancelhas 2" />
                        <img className="w-24 h-56 object-cover" src="servico3.jpg" alt="Procedimento de sobrancelhas 3" />
                        <img className="w-24 h-56 object-cover" src="servico4.jpg" alt="Procedimento de sobrancelhas 4" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Services;