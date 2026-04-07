import Button from "../../ui/Button/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7D6EE]/80 bg-white/80 py-3 backdrop-blur-md animate-fade-up">
      <div className="mx-auto flex h-14 max-w-350 items-center justify-between px-6">
        <a
          href="#hero"
          className="text-xl font-bold text-(--color) transition hover:opacity-80"
        >
          Ana Fernandes
        </a>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-[#620070] md:flex">
          <a className="nav-link transition hover:text-(--color)" href="#hero">
            Home
          </a>
          <a className="nav-link transition hover:text-(--color)" href="#about">
            Sobre
          </a>
          <a
            className="nav-link transition hover:text-(--color)"
            href="#services"
          >
            Serviços
          </a>
          <a
            className="nav-link transition hover:text-(--color)"
            href="#contact"
          >
            Contato
          </a>
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Agendamento</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
