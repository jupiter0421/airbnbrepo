import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Tabs from "./Tabs";
import RightMenu from "./RightMenu";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<"where" | "when" | "who" | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenDropdown(null);
        };
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    return (
        <header
            className={`hidden md:block fixed top-0 w-full bg-white border-b shadow border-gray-200 z-50 
            transition-all duration-300 ${isScrolled ? "py-6" : "py-6"}`}
            ref={containerRef}
        >
            <div className="flex items-center justify-between px-10">
                <Logo />
                <Tabs isScrolled={isScrolled} />
                <RightMenu />
            </div>
            <SearchBar
                isScrolled={isScrolled}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
            />
        </header>
    );
};

export default Navbar;
