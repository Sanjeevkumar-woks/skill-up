import { Typography } from "antd";
import Button from "./Button";
import { GiTeacher } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

export const Workshop = () => {
  return (
    <div className="bg-white mb-10 w-full">
      <div className="flex flex-col md:flex-row w-full p-4 ">
        <div className="flex flex-1 justify-center items-center ">
          <img
            src="https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/Section%20%E2%86%92%20about_img.png.png?raw=true"
            alt="About"
            className="w-80 h-80"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 items-center md:items-start p-2 py-20 md:px-40">
          <div className="w-fit">
            <p className="text-sm text-purple-600 bg-purple-200 rounded-xl p-1">
              Free Workshop
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-3xl font-bold">Join Our Free Workshops</p>
            </div>

            <div className="flex flex-col gap-4">
              <Typography className="text-sm text-gray-500 md:pr-48">
                Edhen an unknown printer took a galley of type and scrambled it
                to make a type specimen bookas survived not only five
                centuries.Edhen an unknown printer took a galley of type and
                scrambled.
              </Typography>
            </div>
            <div className="flex flex-row gap-1 items-center md:pr-56">
              <div>
                <p className="flex items-center gap-2 p-1 font-semibold">
                  <span className="bg-pink-400 p-1 rounded-full">
                    <GiTeacher size={25} color="white" />
                  </span>
                  Smooth Virtual Live Classes
                </p>
                <p className="px-4">
                  Edhen an unknown printer Rtook galley of type scrambled.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 p-1 font-semibold">
                  <span className="bg-blue-400 p-1 rounded-full">
                    <FaGraduationCap size={25} color="white" />
                  </span>
                  99% Graduation Complete
                </p>
                <p className="px-4">
                  Edhen an unknown printer Rtook galley of type scrambled.
                </p>
              </div>
            </div>
            <div className="items-center py-3">
              <Button
                text={"Quick Join Now ->"}
                color={"blue"}
                icon={"IoIosArrowRoundForward"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col  xl:flex-row gap-10 text-white bg-gradient-to-r from-indigo-900 to-indigo-600 rounded-xl md:mx-20 xl:mx-60 sm:mx-20 items-center p-6 px-4">
        <div className="w-full sm:w-1/3">
          <p className="text-3xl sm:text-1xl md:text-3xl font-bold px-10 ">
            Thousands Of
            <span className="bg-yellow-400 m-2 rounded-md">Courses</span>
            Authored By Industry Experts
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex gap-4 justify-center items-center  sm:text-1xl md:text-3xl font-bold">
          <div className="text-center">
            <p>45K+</p>
            <p className="text-sm ">Active Students</p>
          </div>
          <div className="text-center">
            <p>328+</p>
            <p className="text-sm ">Best Instructors</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center  items-center">
          <img
            src="https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/fact_img.png.png?raw=true"
            alt="about"
            className="w-44 h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
