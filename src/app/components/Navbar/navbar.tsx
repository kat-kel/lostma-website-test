'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkItem } from "./types";
import { MainLinks } from "./Links";

const MainLinkPaths = MainLinks.map(({ href }) => {
  return href;
});

export default function Navbar({links}: {links: LinkItem[]}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const pathName = usePathname();

    return (
        <>
        <div className="relative flex h-16 items-center justify-between">
            
            {/* <!-- Mobile menu button--> */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                <button 
                id="user-menu"
                type="button" 
                className="
                    relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                " 
                aria-controls="mobile-menu" 
                aria-expanded="false"
                aria-label="mobile-menu"
                aria-haspopup="true"
                onClick={toggleDropdown}
                >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
                {/* <!--
                    Icon when menu is closed.

                    Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className="block size-6 dark:stroke-black stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/* <!--
                    Icon when menu is open.

                    Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden size-6 dark:stroke-black stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            {/* <!-- Expanded Navbar Links --> */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    {links.map(({href, label}) => {

                        let isActive ;

                        {/* If the path is a Main Link (from top-level navbar) */}
                        if (MainLinkPaths.includes(pathName)) {
                            isActive = pathName === href;
                            
                        }
                        else {
                            if (href === "/") {
                                isActive = false;
                            }
                            else {
                                isActive = pathName.includes(href);
                            }
                        }

                        return (
                            <Link 
                                key={href} 
                                href={href} 
                                className={`
                                    ${isActive ? "bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-white" : "text-white"} 
                                    rounded-md px-3 py-2 
                                    text-sm font-medium 
                                    hover:bg-gray-700 hover:text-white`}>
                            {label}
                            </Link>
                        )
                    }
                    )}
                </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isOpen && (
        <div 
        className="sm:hidden" 
        id="mobile-menu"
        >
            <div className="space-y-1 px-2 pb-3 pt-2">
                {links.map(({href, label}) => {
                    return (
                        <Link
                            href={href} 
                            key={href} 
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            {label}
                        </Link>
                    )
                }

                )}
                {/* <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">About</a>
                <a href="/people" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="/corpus" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Corpus</a>
                <a href="/news" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News</a> */}
            </div>
        </div>
        )}
    </>
    );
}