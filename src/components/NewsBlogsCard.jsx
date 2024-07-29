import { BiCalendarEvent } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

export const NewsBlogsCard = ({ feed }) => {
  const { poster, date, author, title, link } = feed;
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="flex justify-center items-center">
        <img src={poster} alt="course" className="w-full h-32 object-cover" />
      </div>
      <div className="flex gap-1 justify-between p-2 text-gray-400 font-medium">
        <p className="flex gap-1">
          <BiCalendarEvent size={20} /> {date}
        </p>
        <p className="flex gap-1">
          <FaRegCircleUser size={20} /> {author}
        </p>
      </div>
      <Typography className="text-lg font-bold p-1">
        {title?.substring(0, 25) + "..."}
      </Typography>
    </div>
  );
};
