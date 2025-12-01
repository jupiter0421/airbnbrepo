import React from "react";

interface WhoDropdownProps {
    openDropdown: boolean;
}

const WhoDropdown: React.FC<WhoDropdownProps> = ({ openDropdown }) => {
    if (!openDropdown) return null;

    return (
        <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-3xl shadow-xl p-6 animate-fadeIn z-40">
            {/* Guests selector */}
            <div className="flex justify-between items-center py-3">
                <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-xs text-gray-500">Ages 13+</p>
                </div>
                {/* Add increment/decrement buttons if needed */}
            </div>
        </div>
    );
};

export default WhoDropdown;
