import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";
import logo from "../logo.ico";
const { BiSearch } = require("react-icons/bi");
const { PiCarThin } = require("react-icons/pi");
const { RxAvatar } = require("react-icons/rx");

export const Header = () => {
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
    <div className=" flex justify-between align-center px-10 py-2">
      <div className="">
        <img
          src={logo}
          alt="IOC Logo"
          className="w-20 h-16 mr-2 cursor-pointer object-cover"
        />
      </div>
      <div className="flex gap-4 ">
        {links.map((item) => {
          return (
            <>
              <a href={item.url} className="flex items-center">
                {item.title} <MdKeyboardArrowDown />
              </a>
            </>
          );
        })}
      </div>
      <div className="flex gap-3 items-center">
        <BiSearch />
        <PiCarThin />
        <RxAvatar />
        <Button text={"Resign"} color={"blue"} />
      </div>
    </div>
  );
};
