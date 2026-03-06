import Button from "../../ui/Button/button";

function Header() {
    return (
        <main className="w-full border-b border-b-(--color) py-3">
            <header className="max-w-350 mx-auto flex justify-between items-center h-4 px-6">

                
                    <div className="text-(--color) text-[32px] font-extrabold ">
                        Dess
                    </div>

                    <div className="flex gap-16 text-(--color) text-md font-bold cursor-pointer">
                        <p>Home</p>
                        <p>Sobre</p>
                        <p>Serviços</p>
                        <p>Contato</p>
                    </div>


                <div>
                    <Button children="Agendamento" />
                </div>
            </header>
        </main>
    )
}

export default Header;