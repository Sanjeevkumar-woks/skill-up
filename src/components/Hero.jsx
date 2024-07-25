import { FaPlay } from "react-icons/fa";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-col md:flex-col xl:flex-row sm:gap-2  w-full h-full bg-gradient-to-r from-indigo-900 to-indigo-600 text-white py-20 md:px-20 xl:px-36 sm:px-10">
      <div className="flex flex-col flex-1 p-10 justify-center gap-3 ">
        <div>
          <p className="text-2xl md:text-5xl xsm:text2xl sm:text-3xl font-bold ">
            Learning is <span className="bg-yellow-300">What you</span>
          </p>
          <p className="text-2xl md:text-5xl xsm:text2xl sm:text-3xl font-bold ">
            Make of it. Make it Yours
          </p>
          <p className="text-2xl md:text-5xl xsm:text2xl sm:text-xl font-bold ">
            at Skill Up
          </p>
        </div>

        <div className="flex gap-1 items-center py-3 px-2">
          <Button
            text={"Start Free Trial ->"}
            color={"blue"}
            icon={"IoIosArrowRoundForward"}
          />
          <button className="p-2 m-4 bg-yellow-400 rounded-full border-black hover:bg-green-600 flex items-center justify-center">
            <FaPlay size={20} color="yellow" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative">
        <div className="flex gap-4 items-center justify-center -rotate-45">
          <div className="bg-yellow-500 md:h-96 h-52 w-28 rounded-full mb-4"></div>
          <div className="bg-yellow-500 md:h-96 h-52  w-28 rounded-full"></div>
        </div>

        <div className="bg-white p-4 rounded-xl absolute">
          <div className="w-full flex justify-center">
            <img
              src="https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg"
              className="w-full sm:w-52 md:w-72 lg:w-96 h-auto cursor-pointer object-cover"
              alt="Coding for Beginners"
            />
          </div>

          <p className="text-black text-center font-bold p-2 rounded-md">
            Coding for Beginners
          </p>
        </div>
      </div>
    </div>
  );
};
