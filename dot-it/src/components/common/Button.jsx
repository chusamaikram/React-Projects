import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Button({
    children,
    to,
    type = "button", 
    variant = "default", 
    disabled = false,
    onClick,
}) {
    const baseClasses = `
    group bg-[#0160C9] text-white rounded-full text-sm font-semibold
    flex items-center justify-center
    ${disabled ? "opacity-50 pointer-events-none" : ""}
  `;

    const spacing =
        variant === "arrow"
            ? "p-2 gap-1"
            : "py-2.5 px-5";

    const content = (
        <>
            <span className={variant === "arrow" ? "px-3" : ""}>
                {children}
            </span>

            {variant === "arrow" && (
                <FaArrowRight
                    className="
            bg-white text-[#0160C9]
            w-9.5 h-9.5 p-3
            rounded-full
          "
                />
            )}
        </>
    );

    // 👉 Navigation button
    if (to) {
        return (
            <Link to={to} className={`${baseClasses} ${spacing}`}>
                {content}
            </Link>
        );
    }

    // 👉 Form / normal button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${spacing}`}
        >
            {content}
        </button>
    );
}
