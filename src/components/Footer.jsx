import logo from "../logo.ico";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";

const links = [
  "All Programs",
  "All courses",
  "contact",
  "About Us",
  "Private Policy",
  "Privacy Policy",
  "Refund and Returns Policy",
];

export const Footer = () => {
  return (
    <div className="flex flex-wrap md:flex-row sm:flex-col gap-2 bg-gradient-to-r items-center from-indigo-900 to-indigo-600 w-full h-full p-10 text-white ">
      <div className="flex flex-1 flex-col gap-2 px-4 items-center">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-16 mr-2 cursor-pointer object-cover rounded-xl "
          />
        </div>
        <div>
          <p className="md:px-10 xl:px-30 sm:px-0 xsm:px-0 border-l-2 border-red-600">
            Give a man a fish and you feed him for a day; teach a man to fish
            and you feed him for a lifetime.”
          </p>
          <p className="flex justify-end"> — Maimonides</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center gap-1 list-none font-medium">
        <ui className=" ">
          {links.map((link) => {
            return <li className=" hover:text-green-600">{link}</li>;
          })}
        </ui>
      </div>
      <div className="flex flex-1 gap-2 justify-center items-center">
        <AiOutlineLinkedin size={40} className=" hover:text-green-600" />
        <AiOutlineFacebook size={40} className=" hover:text-green-600" />
        <LuInstagram size={40} className=" hover:text-green-600" />
      </div>
    </div>
  );
};
