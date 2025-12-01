import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import WhereDropdown from "./WhereDropdown";
import WhenDropdown from "./WhenDropdown";
import WhoDropdown from "./WhoDropdown";

interface SearchBarProps {
  isScrolled: boolean;
  openDropdown: "where" | "when" | "who" | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<"where" | "when" | "who" | null>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ isScrolled, openDropdown, setOpenDropdown }) => {

  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <div className="flex justify-center items-center">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.div
            key="full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="flex mt-3 w-[800px] items-center justify-between rounded-full border border-gray-300 bg-white shadow-sm text-start"
          >
            {/* Where */}
            <div
              className="w-full p-3 rounded-full hover:border-1 hover:bg-gray-300 flex flex-col text-start pl-5 active focus:bg-gray-400"
              onClick={() => setOpenDropdown(openDropdown === "where" ? null : "where")}
            >
              <span className="font-semibold">Where</span>
              <span className="text-gray-500 text-xs">Search destinations</span>
              <WhereDropdown openDropdown={openDropdown === "where"} setOpenDropdown={(v) => setOpenDropdown(v ? "where" : null)} />
            </div>

            {/* When */}
            <div
              className="w-full p-3 rounded-full hover:border-1 hover:bg-gray-300 flex flex-col text-start"
              onClick={() => setOpenDropdown(openDropdown === "when" ? null : "when")}
            >
              <span className="font-semibold">When</span>
              <span className="text-gray-500 text-xs">Add dates</span>
              <WhenDropdown
                openDropdown={openDropdown === "when"}
                setOpenDropdown={(v) => setOpenDropdown(v ? "when" : null)}
                selectedRange={selectedRange}
                setSelectedRange={setSelectedRange}
              />
            </div>

            {/* Who */}
            <div
              className="w-full p-3 rounded-full hover:border-1 hover:bg-gray-300 flex justify-between text-start"
              onClick={() => setOpenDropdown(openDropdown === "who" ? null : "who")}
            >
              <div className="flex flex-col px-3">
                <span className="font-semibold">Who</span>
                <span className="text-gray-500 text-xs">Add guests</span>
              </div>
              <div className="bg-red-600 text-white rounded-full p-3 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <WhoDropdown openDropdown={openDropdown === "who"} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mini"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="absolute top-5 flex w-[350px] items-center justify-between rounded-full border border-gray-300 bg-white px-5 py-2"
          >
            <button className="hover:text-black transition flex"><img className="" width={30} src="../assets/images/home.png" alt="home-img" /> </button>
            <span className="btn cursor-pointer font-semibold">Anywhere</span>
            <span className="btn cursor-pointer font-semibold">Anytime</span>
            <span className="btn cursor-pointer font-semibold">Add guests</span>
            <button className="bg-red-600 text-white rounded-full p-2 flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
