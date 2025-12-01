import React, { useRef, useEffect } from "react";

interface WhereDropdownProps {
    openDropdown: boolean;
    setOpenDropdown: (open: boolean) => void;
}

const WhereDropdown: React.FC<WhereDropdownProps> = ({ openDropdown, setOpenDropdown }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setOpenDropdown]);

    if (!openDropdown) return null;

    return (
        <div
            ref={dropdownRef}
            className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[520px] max-h-[420px] bg-white rounded-3xl shadow-xl z-50 p-6 overflow-y-auto animate-fadeIn"
        >
            <p className="text-sm font-semibold text-gray-700 mb-4">Recent searches</p>

            <div className="space-y-4">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
                    <img alt="mountain" src="/icons/mountain.png" className="w-10 h-10" />
                    <div>
                        <p className="font-medium">Breckenridge Ski Resort</p>
                        <p className="text-xs text-gray-500">Dec 1 – 25</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-xl">
                    <img src="/icons/mountain2.png" className="w-10 h-10" />
                    <div>
                        <p className="font-medium">Breckenridge</p>
                        <p className="text-xs text-gray-500">Dec 1 – 25</p>
                    </div>
                </div>

                <hr className="my-4" />

                <p className="text-sm font-semibold text-gray-700 mb-2">Suggested destinations</p>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl" />
                    <div>
                        <p className="font-medium">Nearby</p>
                        <p className="text-xs text-gray-500">Find what’s around you</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl" />
                    <div>
                        <p className="font-medium">San Diego, CA</p>
                        <p className="text-xs text-gray-500">Great for a weekend getaway</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 bg-blue-200 rounded-xl" />
                    <div>
                        <p className="font-medium">Big Bear Lake, CA</p>
                        <p className="text-xs text-gray-500">Popular lake destination</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 bg-red-200 rounded-xl" />
                    <div>
                        <p className="font-medium">Las Vegas, NV</p>
                        <p className="text-xs text-gray-500">For sights like Stratosphere Tower</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereDropdown;
