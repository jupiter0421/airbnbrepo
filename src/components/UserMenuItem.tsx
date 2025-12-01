import React from "react";

interface UserMenuItemProps {
    label: string;
    onClick?: () => void;
    danger?: boolean;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ label, onClick, danger }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition
                ${danger ? "text-red-600 font-semibold" : "text-gray-700"}`}
        >
            {label}
        </button>
    );
};

export default UserMenuItem;
