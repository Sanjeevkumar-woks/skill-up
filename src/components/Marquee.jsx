import Marquee from "react-fast-marquee";

export const MarqueeComponent = () => {
  return (
    <Marquee
      gradient={false} // Disables gradient overlay for a cleaner look
      speed={50} // Adjust the speed as needed
    >
      <div className="flex flex-row justify-between bg-blue-950 py-2 px-4  items-center w-screen">
        <p className="text-white text-lg md:text-xl font-bold">Amazon 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Ursera 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Cognizant 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">AMD 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Amazon 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Ursera 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Cognizant 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">AMD 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Amazon 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Ursera 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">Cognizant 🌟</p>
        <p className="text-white text-lg md:text-xl font-bold">AMD 🌟</p>
      </div>
    </Marquee>
  );
};
