import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu } from "lucide-react";
import UserMenu from "./UserMenu";

const RightMenu: React.FC = () => {
    const [userMenu, setUserMenu] = useState(false);

    return (
        <div className="flex items-center gap-4 relative">
            <button className="text-sm font-semibold">Become a host</button>
            <button className="flex items-center gap-1 hover:text-black">
                <Globe />
            </button>

            <UserMenu />
        </div>
    );
};

export default RightMenu;
