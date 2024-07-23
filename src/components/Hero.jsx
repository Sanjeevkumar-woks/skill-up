import { FaPlay } from "react-icons/fa";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="flex flex-row xl:flex-row sm:flex-col  w-full h-full bg-gradient-to-r from-indigo-900 to-indigo-600 text-white py-20 md:px-20 xl:px-36 sm:px-10">
      <div className="flex flex-col flex-1 p-10 justify-center ">
        <p className="text-5xl sm:text-3xl font-bold ">
          Learning is <span className="bg-yellow-300">What you</span>
        </p>
        <p className="text-5xl sm:text-3xl font-bold ">
          Make of it. Make it Yours
        </p>
        <div className="flex">
          <p className="text-5xl sm:text-3xl font-bold ">at Skill Up</p>
          <div className="items-center py-3 px-2">
            <Button
              text={"Start Free Trial ->"}
              color={"blue"}
              icon={"IoIosArrowRoundForward"}
            />
          </div>

          <button className="p-2 m-4 bg-yellow-400 rounded-full border-black hover:bg-green-600 flex items-center justify-center">
            <FaPlay size={20} color="yellow" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative">
        <div className="flex gap-4 items-center justify-center -rotate-45">
          <div className="bg-yellow-500 h-80 w-28 rounded-full mb-4"></div>
          <div className="bg-yellow-500 h-80 w-28 rounded-full"></div>
        </div>

        <div className="bg-white p-4 rounded-xl absolute ">
          <img
            src="https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg"
            className="w-48 h-48 object-fill  cursor-pointer object-cover"
            alt="Coding for Beginners"
          />
          <p className="text-black text-center font-bold p-2 rounded-md">
            Coding for Beginners
          </p>
        </div>
      </div>
    </div>
  );
};
