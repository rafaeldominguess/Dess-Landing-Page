function Button({ children, onClick, href, className = "", type = "button" }) {
  const baseClassName =
    "btn-premium cursor-pointer inline-flex items-center justify-center rounded-full bg-(--background-button) px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm shadow-[#cb30e0]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b928ca] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#cb30e0]/40";

  if (href) {
    return (
      <a className={`${baseClassName} ${className}`.trim()} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClassName} ${className}`.trim()}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
