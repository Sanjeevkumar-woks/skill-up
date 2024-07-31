import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiCarThin } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import logo from "../logo.ico";
import { HeaderLinks } from "../utils/HeaderLinks";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header
      className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2 bg-white shadow-lg"
      role="banner"
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <img
          src={logo}
          alt="Skill-up Logo"
          className="w-20 h-16 mr-2 cursor-pointer object-cover"
          onClick={() => navigate("/")}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:gap-4 w-full md:w-auto mt-4 md:mt-0 justify-between items-center`}
        role="navigation"
        aria-label="Main navigation"
      >
        {HeaderLinks.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="flex text-lg items-center px-3 py-2 md:py-0 hover:text-blue-500 font-bold"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex gap-3 items-center mt-4 md:mt-0">
        <button aria-label="Search">
          <BiSearch size={25} />
        </button>
        <button aria-label="View cars">
          <PiCarThin size={25} />
        </button>
        <button aria-label="User profile">
          <RxAvatar size={25} />
        </button>
        <Button text="Register" color="blue" url={"/register"} />
      </div>
    </header>
  );
};
