import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai"; 
import { useZustand } from "../../Zustand/useZustand";
import Notification from "../Notification/Notification";

export const Navbar = () => {
  const { userInformation } = useZustand();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  return (
    <nav className="w-[98%] m-auto bg-white text-black p-4 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
       
        <h1 className="text-lg font-bold">Social Media App</h1>

       
        <div className="hidden md:flex w-[50%] h-auto relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-4/5 h-9 rounded-full text-black px-11 border-2 focus:outline-blue-400"
          />
          <button className="text-black h-9 rounded-full absolute left-4 top-1/2 -translate-y-1/2">
            <IoIosSearch size={20} />
          </button>
        </div>

       
        <div className="flex items-center gap-5">
          <Notification />

          <div className="hidden md:flex items-center">
            <img
              src={userInformation?.profilePicture || "/default-profile.png"}
              alt={`${userInformation?.username || "User"}'s Image`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="ml-4 text-sm font-medium">
              {userInformation?.username || "Guest"}
            </span>
          </div>

          <button
            className="md:hidden text-black"
            onClick={toggleMenu}
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      
      {isShowMenu && (
        <div
          className="absolute right-4 top-[80px] bg-white rounded-md shadow-lg z-50 w-60"
        >
          <ul className="flex flex-col gap-4 p-4">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Profile
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
