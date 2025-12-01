import React, { useState, useRef, useEffect } from "react";
import { Menu, User } from "lucide-react";
import UserMenuItem from "./UserMenuItem";

const UserMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            {/* Button */}
            <button
                className="flex items-center gap-2 border rounded-full px-4 py-2 hover:shadow-md transition bg-white"
                onClick={() => setOpen(!open)}
            >
                <Menu className="w-5 h-5 text-gray-700" />
                {/* <User className="w-6 h-6 text-gray-700" /> */}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl py-2 z-50">

                    <div className="px-4 py-2 text-xs text-gray-500">
                        Signed in as<br />
                        <span className="font-medium text-gray-800">tom@example.com</span>
                    </div>

                    <hr className="my-2" />

                    <UserMenuItem label="Account settings" onClick={() => {}} />
                    <UserMenuItem label="Support" onClick={() => {}} />
                    <UserMenuItem label="License" onClick={() => {}} />

                    <hr className="my-2" />

                    <UserMenuItem label="Sign out" danger onClick={() => {}} />
                </div>
            )}
        </div>
    );
};

export default UserMenu;
