import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";

interface WhenDropdownProps {
    openDropdown: boolean;
    setOpenDropdown: (open: boolean) => void;
    selectedRange: {
        startDate: Date;
        endDate: Date;
        key: string;
    };
    setSelectedRange: (range: any) => void;
}

const WhenDropdown: React.FC<WhenDropdownProps> = ({
    openDropdown,
    setOpenDropdown,
    selectedRange,
    setSelectedRange
}) => {

    const ref = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setOpenDropdown]);

    if (!openDropdown) return null;

    return (
        <div
            ref={ref}
            className="
                absolute top-[110%] left-1/2 -translate-x-1/2
                bg-white rounded-3xl shadow-xl z-50 p-6
                animate-fadeIn
            "
        >
            <DateRange
                ranges={[selectedRange]}
                onChange={(ranges:any) => setSelectedRange(ranges.selection)}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
                rangeColors={["#ff385c"]}
            />
        </div>
    );
};

export default WhenDropdown;
