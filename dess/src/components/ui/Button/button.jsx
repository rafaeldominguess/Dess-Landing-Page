function Button({ children, onClick }) {
    return (
        <button
            className="bg-(--background-button) text-white px-6 py-2 rounded-full hover:opacity-80 transition-colors duration-300 uppercase cursor-pointer font-bold"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;