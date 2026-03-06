import Button from "../../ui/Button/button";

function Header() {
    return (
        <main className="w-full border-b border-b-(--color) py-3">
            <header className="max-w-350 mx-auto flex justify-between items-center h-4 px-6">

                
                    <div className="text-(--color) text-xl font-bold">
                        Ana Fernandes
                    </div>

                    <div className=" hidden md:flex md:gap-16 md:text-(--color) md:text-md md:font-bold md:cursor-pointer">
                        <p>Home</p>
                        <p>Sobre</p>
                        <p>Serviços</p>
                        <p>Contato</p>
                    </div>


                <div className="hidden md:block">
                    <Button
                     children="Agendamento" />
                </div>
            </header>
        </main>
    )
}

export default Header;