import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface TabsProps {
    isScrolled: boolean;
}

const Tabs: React.FC<TabsProps> = ({ isScrolled }) => {
    return (
        <motion.nav
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className={`flex gap-6 text-sm font-medium ${isScrolled ? "pointer-events-none" : "pointer-events-auto"}`}
        >
            <Link className="hover:text-black transition border-b-2 border-white focus:border-gray-800 items-center flex active" to="/"><img className="" width={30} src="../assets/images/home.png" alt="home-img" /> Homes</Link>
            <Link className="hover:text-black transition border-b-2 border-white focus:border-gray-800 items-center flex" to="/"><img className="" width={30} src="../assets/images/ballon.png" alt="home-img" /> Experiences</Link>
            <Link className="hover:text-black transition border-b-2 border-white focus:border-gray-800 items-center flex" to="/"><img className="" width={30} src="../assets/images/service.png" alt="home-img" /> Services</Link>
        </motion.nav>
    );
};

export default Tabs;
