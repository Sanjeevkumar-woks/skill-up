import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import Button from "./Button";

export const Features = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center m-4 sm:m-2 p-4">
      <div className="w-fit m-4">
        <p className="text-sm text-purple-600 bg-purple-200 rounded-xl p-1  ">
          Our Top Features
        </p>
      </div>
      <p className="text-3xl font-bold">Achieve Your Goal with skill-Up</p>
      <div className="flex flex-col p4 items-center m-2">
        <p className=" text-sm text-gray-500 ">
          when an unknown printer took a galley of type and scrambled make
        </p>
        <p className=" text-sm text-gray-500 ">
          specimen book has survived not only five centuries
        </p>
      </div>

      {/* card-session */}
      <div className="flex gap-4 p-4 justify-between sm:flex-col md:flex-row ">
        <div className="flex flex-col  bg-green-50 rounded-xl p-4 border-2 border-green-300 cursor-pointer shadow-lg shadow-green-500 md:shadow-md md:shadow-green-500  hover:shadow-xl hover:shadow-green-500">
          <div className="flex justify-end">
            <span>
              <BsStars color="lightgray" size={30} />
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="flex justify-center items-center gap-2 text-xl font-bold">
              <span className="bg-green-400 p-2 rounded-full">
                <FaGraduationCap size={30} color="white" />
              </span>
              Expert Tutors
            </p>
            <p className="text-sm font-medium">
              When an unknown printer took a Galley offer
            </p>
            <p className="text-sm font-medium">Type and scrambled makes.</p>
          </div>
        </div>
        <div className="flex flex-col bg-purple-50 rounded-xl p-4 border-2 border-purple-300 cursor-pointer shadow-lg shadow-purple-500 md:shadow-md md:shadow-purple-500  hover:shadow-xl hover:shadow-purple-500">
          <div className="flex justify-end">
            <span>
              <BsStars color="lightgray" size={30} />
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="flex justify-center items-center gap-2 text-xl font-bold">
              <span className="bg-purple-400 p-2 rounded-full">
                <BiBook size={30} color="white" />
              </span>
              Expert Courses
            </p>
            <p className="text-sm font-medium">
              When an unknown printer took a Galley offer
            </p>
            <p className="text-sm font-medium">Type and scrambled makes.</p>
          </div>
        </div>
        <div className="flex flex-col   bg-orange-50 rounded-xl p-4 border-2 border-orange-300 cursor-pointer shadow-lg shadow-orange-500 md:shadow-md md:shadow-orange-500 hover:shadow-xl hover:shadow-orange-500">
          <div className="flex justify-end">
            <span>
              <BsStars color="lightgray" size={30} />
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="flex justify-center items-center gap-2 text-xl font-bold">
              <span className="bg-orange-400 p-2 rounded-full">
                <PiCertificateFill size={30} color="white" />
              </span>
              Expert Certificate
            </p>
            <p className="text-sm font-medium">
              When an unknown printer took a Galley offer
            </p>
            <p className="text-sm font-medium">Type and scrambled makes.</p>
          </div>
        </div>
      </div>

      {/* free-trial */}
      <div className="flex flex-wrap flex-row gap-2 sm:flex-col md:flex-row w-full h-full px-40 py-6 ">
        <div className=" flex flex-1 justify-center items-center relative  ">
          <img
            src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg"
            alt="image"
            className="w-56 h-80 sm:w-48 rounded-full object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute pb-36 md:pb-24 sm:pb-24">
              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                <path
                  id="text-arc"
                  d="M10,50a40,40 0 1,1 80,0a40,40 0 1,1 0,0"
                  fill="none"
                />
                <text fontSize="6" className="text-gray-700 font-semibold">
                  <textPath
                    href="#text-arc"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    •EDUCATION •SYSTEM •CAN •MAKE •CHANGE •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-1  flex-col gap-2 items-left sm:items-center sm:p-2 p-10 ">
          <div className="w-fit  items-center">
            <p className="text-sm text-purple-600 bg-purple-200 rounded-xl p-1 ">
              Get more About us
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-3xl font-bold">Thousand of Top Courses</p>
              <p className="text-3xl font-bold">Now In One Place</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className=" text-sm text-gray-500 ">
                Groove’s intuitive shared inbox makes it easy for team members
                to
              </p>
              <p className=" text-sm text-gray-500 ">
                organize, prioritize and.In this episode of the Smashing Pod
                we’re
              </p>
              <p className=" text-sm text-gray-500 ">
                talking about Web Platform Baseline
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="flex gap-2 items-center text-sm font-bold">
                <span className="bg-yellow-400 p-1 rounded-full">
                  <FaArrowRight size={15} />
                </span>
                The Most World Class Instructors
              </p>
              <p className="flex gap-2 items-center text-sm font-bold">
                <span className="bg-yellow-400 p-1 rounded-full">
                  <FaArrowRight size={15} />
                </span>
                Access Your Class anywhere
              </p>
              <p className="flex gap-2 items-center text-sm font-bold">
                <span className="bg-yellow-400 p-1 rounded-full">
                  <FaArrowRight size={15} />
                </span>
                Flexible Course Plan
              </p>
            </div>
            <div className="items-center py-3">
              <Button
                text={"Start Free Trial ->"}
                color={"blue"}
                icon={"IoIosArrowRoundForward"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
