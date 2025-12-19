import { Link, useLocation } from "react-router-dom"
import Button from "./Button"
import { Logo } from '../../assets/svgs'
import ResourcesDropdown from "./Resourse-dropdown";
import { useEffect, useRef, useState } from "react";



const Header = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const location = useLocation();
    const pathname = location.pathname;

    const NavLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Product',
            path: '/product'
        },
        {
            name: 'Why dot.it',
            path: '/why-dot-it'
        },
        {
            name: 'Resources',
            path: '#',
            links: [
                { title: "Request a Demo", path: "/request-a-demo" },
                { title: "Pricing", path: "/pricing" },
                { title: "Case Studies", path: "/case-studies" },
                { title: "Blog", path: "/blog" },
                { title: "Contact Us", path: "/contact-us" },
            ]

        },
    ]
    return (
        <>
            <header className="bg-transparent border-b-2 fixed top-0 z-999 left-0 w-full backdrop-blur-sm border-gray-100 ">
                <div className="container">
                    <nav className="py-3 flex items-center justify-between">
                        <Link to='/' aria-label="logo">
                            <Logo />
                        </Link>
                        <ul className="flex items-center">
                            {NavLinks.map(link => (
                                <li ref={ref} key={link.name} className="relative py-2.5 px-6">
                                    {link.name === "Resources" ? (
                                        <>
                                            {(() => {
                                                const isResourcesActive = link.links.some(
                                                    (item) => pathname === item.path
                                                );

                                                return (
                                                    <>
                                                        <button
                                                            onClick={() => setOpen(!open)}
                                                            className={`flex items-center gap-2 text-lg font-medium transition
            ${isResourcesActive ? "text-[#0160C9]" : "hover:text-[#0160C9]"}`}
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

                                                        {/* Blue dot */}
                                                        <div
                                                            className={`absolute top-0 left-2.5 rounded-full bg-[#0160c9] transition-all
                                                                      ${isResourcesActive ? "w-2 h-2" : "w-0 h-0"}`}
                                                        ></div>
                                                    </>
                                                );
                                            })()}
                                            <div
                                                className={`absolute -left-4 mt-4 w-48 rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-200 ${open
                                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                                    : "opacity-0 -translate-y-2 pointer-events-none"
                                                    }`}
                                            >
                                                <ul className="py-3">
                                                    {link.links.map((item) => (
                                                        <li key={item}>
                                                            <Link
                                                                onClick={() => setOpen(false)}
                                                                to={item.path}
                                                                className={`block px-6 py-1 text-[15px] text-[#4B5563] hover:bg-gray-50 hover:text-[#0160C9] transition ${pathname===item.path ?"text-[#0160C9]":""}`}>

                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>


                                        </>)
                                        :
                                        (
                                            <>
                                                <Link className={`text-lg font-medium hover:text-[#0160c9] ${pathname === link.path ? 'text-[#0160c9]' : ''}`} to={link.path} >{link.name}</Link>

                                                <div className={`absolute top-0 left-2.5  rounded-full bg-[#0160c9] ${pathname === link.path ? "w-2 h-2" : "w-0 h-0"}`}></div>
                                            </>

                                        )}
                                </li>

                            ))}

                        </ul>
                        <Button to="" >
                            Get Started
                        </Button>

                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header
