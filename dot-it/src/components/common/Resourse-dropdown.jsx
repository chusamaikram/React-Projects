
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ResourcesDropdown({pathname}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-lg font-medium hover:text-[#0160C9] transition"
            >
                Resources
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown */}
            <div
                className={`absolute -left-4 mt-4 w-48 rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-200 ${open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <ul className="py-3">
                    {[
                        { title: "Request a Demo", path: "/request-a-demo" },
                        { title: "Pricing", path: "/pricing" },
                        { title: "Case Studies", path: "/case-studies" },
                        { title: "Blog", path: "/blog" },
                        { title: "Contact Us", path: "/contact-us" },
                    ].map((item) => (
                        <li key={item}>
                            <Link
                                to={item.path}
                                className="block px-6 py-3 text-[15px] text-[#4B5563] hover:bg-gray-50 hover:text-[#0A2540] transition">
                                <div className={`absolute top-0 left-2.5  rounded-full bg-[#0160c9] ${pathname === item.path ? "w-2 h-2" : "w-0 h-0"}`}></div>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
