import React from "react";

const Button = ({ text, color, icon }) => {
  const colorClasses = {
    red: "bg-red-700 hover:bg-red-900",
    blue: "bg-blue-700 hover:bg-blue-900",
    green: "bg-green-700 hover:bg-green-900",
    purple: "bg-purple-700 hover:bg-purple-900",
    customPurple: "bg-customPurple hover:bg-customPurple-dark", // Use this for the custom color
  };
  const boxShadowStyle = {
    WebkitBoxShadow: " 10px 13px 6px -5px rgba(0,0,0,0.65)",
    MozBoxShadow: " 10px 13px 6px -5px rgba(0,0,0,0.65)",
    boxShadow: "10px 13px 6px -5px rgba(0,0,0,0.65)",
  };

  return (
    <button
      className={`px-4 py-2 rounded-full ${
        colorClasses[color] || colorClasses.red
      } text-white`}
      style={boxShadowStyle}
    >
      {text}
      {icon ? <icon /> : ""}
    </button>
  );
};

export default Button;
