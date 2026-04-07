function Footer() {
  return (
    <footer className="border-t border-[#E7D6EE] bg-[#FBF7FC] text-[#620070]">
      <div className="mx-auto flex w-full max-w-350 flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-lg font-semibold tracking-wide">
            Ana Fernandes Studio
          </p>
          <p className="text-sm text-[#8B5C9E]">
            Design de sobrancelhas com delicadeza e precisão.
          </p>
        </div>

        <p className="text-sm text-[#8B5C9E]">
          &copy; 2024 Ana Fernandes Studio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
