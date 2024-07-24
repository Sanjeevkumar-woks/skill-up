import Marquee from "react-fast-marquee";

const companies = [
  "Amazon",
  "Google",
  "Ursera",
  "Cognizant",
  "AMD",
  "Meta",
  "Bosh",
  "Lg",
  "Motorola",
];

export const MarqueeComponent = () => {
  return (
    <Marquee
      gradient={false} // Disables gradient overlay for a cleaner look
      speed={50} // Adjust the speed as needed
    >
      <div className="flex flex-row justify-around bg-blue-950 py-2 px-4 items-center w-screen">
        {companies.map((company, index) => (
          <p
            key={index}
            className="text-white text-lg md:text-xl font-bold whitespace-nowrap"
          >
            🌟 {company} 🌟
          </p>
        ))}
      </div>
    </Marquee>
  );
};
