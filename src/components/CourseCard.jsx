import { Badge, Typography } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { BiBookReader } from "react-icons/bi";
import { BsClockFill, BsStarFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineUserMinus } from "react-icons/hi2";

export const Card = ({
  poster,
  category,
  price,
  title,
  noStudents,
  duration,
  noGraduates,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 gap-1">
      <div className="flex justify-center items-center">
        <img src={poster} alt="course" className="w-full h-32 object-cover" />
      </div>
      <div className="flex justify-between p-2">
        <p className="text-sm text-purple-600 bg-purple-200 rounded-xl p-1  ">
          {category}
        </p>
        <p className="text-purple-600 font-medium">${price}</p>
      </div>
      <Typography className="text-lg font-bold p-1">
        {title?.substring(0, 25) + "..."}
      </Typography>
      <div className="flex justify-between p-2">
        <p className="flex gap-1">
          <FaRegCircleUser size={20} />
          Sanjeev
        </p>

        <p className="flex gap-1">
          <BsStarFill size={20} color="gold" />
          <p className=" text-gray-400">( 4.5 Reviews)</p>
        </p>
      </div>
      <hr />
      <div className="flex gap-1 justify-between p-2 text-gray-400 font-medium">
        <p className="flex gap-1">
          <BiBookReader size={20} /> {noStudents}
        </p>
        <p className="flex gap-1">
          <BsClockFill size={20} /> {duration}
        </p>
        <p className="flex gap-1">
          <FaGraduationCap size={20} />
          {noGraduates}
        </p>
      </div>
    </div>
  );
};
