import Button from "../../ui/Button/button";

function Header() {
    return (
        <main className="w-full border-b border-b-(--color) py-4">
            <header className="max-w-350 mx-auto flex justify-between items-center h-8">  
                <div className="text-(--color) text-[32px] font-extrabold uppercase">
                    Dess
                </div>

                <div className="flex gap-16 uppercase text-(--color) text-[16px] font-extrabold cursor-pointer">
                    <p>home</p>
                    <p>sobre</p>
                    <p>serviços</p>
                    <p>contato</p>
                </div>

                <div>
                    <Button children="Agendamento" />
                </div>
            </header>
        </main>
    )
}

export default Header;