import { useState, useRef, useEffect } from "react";
import { Menu, UserCircle } from "lucide-react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 border px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <Menu className="w-5 h-5 text-gray-700" />
        <UserCircle className="w-8 h-8 text-gray-500" />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg py-2 border animate-fade"
        >
          {/* Guest options */}
          <ul className="flex flex-col text-gray-700">

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium">
              Login
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium">
              Sign Up
            </li>

            <hr className="my-2" />

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Host your home
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Help
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Account
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
