import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { PiCarThin } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import logo from "../logo.ico";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: "Dashboard",
      url: "",
      items: [],
    },
    {
      title: "All Courses",
      url: "",
      items: [],
    },
    {
      title: "Contact",
      url: "",
      items: [],
    },
    {
      title: "Affiliate",
      url: "",
      items: [],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2 bg-white shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-16 mr-2 cursor-pointer object-cover"
        />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-4 w-full md:w-auto mt-4 md:mt-0`}
      >
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="flex items-center px-3 py-2 md:py-0 hover:text-blue-500"
          >
            {item.title} <MdKeyboardArrowDown />
          </a>
        ))}
        <div className="flex gap-3 items-center mt-4 md:mt-0">
          <BiSearch />
          <PiCarThin />
          <RxAvatar />
          <Button text={"Resign"} color={"blue"} />
        </div>
      </div>
    </div>
  );
};
