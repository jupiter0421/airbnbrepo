import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, User, Search, Globe } from "lucide-react";

// -----------------------------
// Simple Button Component
// -----------------------------
export function Button({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

// -----------------------------
// Navbar1 Component
// -----------------------------
export const Navbar1: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => setSearchOpen(prev => !prev);
  const toggleUserMenu = () => setUserMenuOpen(prev => !prev);

  return (
    <>
      <header className={`hidden md:block fixed top-0 w-full bg-white border-b shadow border-gray-200 z-50 transition-all duration-300 ${isScrolled ? "py-6" : "py-6"}`}>
        <div className="flex items-center justify-between px-10">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-red-500">Airbnb</div>
          </Link>
          <motion.nav animate={{ opacity: isScrolled ? 0 : 1 }} transition={{ duration: 0.25 }} className={`flex gap-6 text-sm font-medium ${isScrolled ? "pointer-events-none" : "pointer-events-auto"}`}>
            <Link to="/" className="hover:text-black flex items-center gap-1">Homes</Link>
            <Link to="/experiences" className="hover:text-black flex items-center gap-1">Experiences</Link>
            <Link to="/services" className="hover:text-black flex items-center gap-1">Services</Link>
          </motion.nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold">Become a host</button>
            <button className="flex items-center gap-1 hover:text-black" onClick={toggleUserMenu}>
              <Globe />
            </button>
            <button onClick={toggleUserMenu} className="flex items-center gap-2 p-2 border rounded-full hover:shadow-md cursor-pointer">
              <Menu className="w-5 h-5" />
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div key="full" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="flex mt-3 w-[800px] items-center justify-between rounded-full border border-gray-300 bg-white shadow-sm text-start cursor-pointer" onClick={toggleSearch}>
                <div className="btn w-full p-3 pl-5 rounded-full flex flex-col text-start">
                  <span className="font-semibold">Where</span>
                  <span className="text-gray-500 text-xs">Search destinations</span>
                </div>
                <div className="btn w-full p-3 rounded-full flex flex-col text-start">
                  <span className="font-semibold">When</span>
                  <span className="text-gray-500 text-xs">Add dates</span>
                </div>
                <div className="btn w-full p-3 rounded-full flex justify-between text-start">
                  <div className="flex flex-col px-3">
                    <span className="font-semibold">Who</span>
                    <span className="text-gray-500 text-xs">Add guests</span>
                  </div>
                  <div className="bg-red-600 text-white rounded-full p-3 flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="mini" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.25 }} className="absolute top-5 flex w-[350px] items-center justify-between rounded-full border border-gray-300 bg-white px-5 py-2 cursor-pointer" onClick={toggleSearch}>
                <span className="font-semibold">Anywhere</span>
                <span className="font-semibold">Anytime</span>
                <span className="font-semibold">Add guests</span>
                <div className="bg-red-600 text-white rounded-full p-2 flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96">
            <h2 className="text-xl font-semibold mb-4">Search Stays</h2>
            <input className="border p-3 rounded-xl w-full mb-2" placeholder="Location" />
            <input className="border p-3 rounded-xl w-full mb-2" placeholder="Check-in date" />
            <input className="border p-3 rounded-xl w-full mb-4" placeholder="Check-out date" />
            <Button className="w-full" onClick={toggleSearch}>Search</Button>
          </div>
        </div>
      )}

      {/* User Menu */}
      {userMenuOpen && (
        <div className="absolute right-4 top-20 bg-white shadow-lg rounded-2xl p-4 w-56">
          <p className="text-sm text-gray-500">Signed in as javier@example.com</p>
          <div className="mt-3 flex flex-col gap-2">
            <button className="text-left hover:bg-gray-100 p-2 rounded-xl">Account Settings</button>
            <button className="text-left hover:bg-gray-100 p-2 rounded-xl">Support</button>
            <button className="text-left hover:bg-gray-100 p-2 rounded-xl">Sign Out</button>
          </div>
        </div>
      )}
    </>
  );
};