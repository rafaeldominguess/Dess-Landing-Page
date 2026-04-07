import Button from "../../components/ui/Button/button";

function Contact() {
  return (
    <section
      id="contact"
      className="section-shell overflow-hidden w-full py-16 md:py-24"
    >
      <div className="surface-card mx-auto flex max-w-350 flex-col justify-center gap-16 rounded-3xl bg-[#F7EAF9] px-6 py-10 shadow-[0_20px_60px_rgba(98,0,112,0.06)] md:flex-row">
        <div className="w-full max-w-md md:w-[45%] animate-fade-up">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523260.744066973!2d-53.66991564999999!3d-30.41669715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1775523207632!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do estúdio"
              className="w-full h-64 rounded-t-2xl md:h-80"
            ></iframe>
          </div>
          <div className="rounded-b-2xl bg-[#F7EAF9] p-4">
            <ul className="flex flex-col gap-3 text-[#620070]">
              <li className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#620070] shadow-sm"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <title>Telefone</title>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.32 1.81.59 2.67a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.2-1.25a2 2 0 0 1 2.11-.45c.86.27 1.75.47 2.67.59A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span>Telefone: (51) 99999-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#620070] shadow-sm"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <title>Email</title>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>Email: contato@anafernandesstudio.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#620070] shadow-sm"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <title>Endereço</title>
                    <path d="M12 21s6-4.35 6-10a6 6 0 0 0-12 0c0 5.65 6 10 6 10Z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                </span>
                <span>
                  Endereço: Rua das Flores, 245 - Centro, Porto Alegre - RS
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="animate-fade-up anim-delay-1 flex w-full max-w-100 flex-col gap-6 md:w-[45%]">
          <h1 className="text-3xl text-(--color) font-bold">
            Fale <span className="text-[#620070]">Conosco</span>
          </h1>
          <form action="">
            <input
              type="text"
              placeholder="Nome"
              className="premium-input w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="premium-input w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="number"
              placeholder="WhatsApp"
              className="premium-input w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Mensagem"
              className="premium-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>
          </form>
          <div>
            <Button>Enviar Mensagem</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
