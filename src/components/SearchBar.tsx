import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        sticky top-4 z-50 
        hidden md:flex items-center 
        gap-3 px-4 py-2 
        border rounded-full shadow-sm 
        bg-white 
        hover:shadow-lg 
        transition cursor-pointer select-none
      "
    >
      <span className="font-medium px-2">Anywhere</span>
      <span className="w-px h-5 bg-gray-300"></span>

      <span className="font-medium px-2">Any week</span>
      <span className="w-px h-5 bg-gray-300"></span>

      <span className="text-gray-500 px-2">Add guests</span>

      <div className="bg-red-500 text-white rounded-full p-2 flex items-center justify-center">
        <Search className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default SearchBar;
