import React from "react";
import Button from "./Button";

export const Join = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-between bg-white rounded-xl p-6 shadow-lg">
          <div className="w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
            <img
              src="https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/instructor_two01.png.png?raw=true"
              alt="Become an instructor"
              className="w-44 h-auto rounded-lg object-cover"
            />
          </div>
          <div className="sm:pl-6">
            <p className="text-2xl font-semibold">Become an Instructor</p>
            <p className="mt-2 text-gray-600">
              To take a trivial example, which of us undertakes physical
              exercise yes is this happen here.
            </p>
            <div className="items-center py-3">
              <Button
                text={"Apply Now ->"}
                color={"blue"}
                icon={"IoIosArrowRoundForward"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between bg-white rounded-xl p-6 shadow-lg">
          <div className="w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
            <img
              src="https://raw.githubusercontent.com/Sanjeevkumar-woks/skill-up/master/public/images/instructor_two02.png.png"
              alt="Become a student"
              className="w-44 h-52 rounded-lg object-cover"
            />
          </div>
          <div className="sm:pl-6">
            <p className="text-2xl font-semibold">Become a Student</p>
            <p className="mt-2 text-gray-600">
              Join millions of people from around the world learning together.
              Online learning.
            </p>
            <div className="items-center py-3">
              <Button
                text={"Apply Now ->"}
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
