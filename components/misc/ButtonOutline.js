import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-white-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize bg-white hover:bg-white-500 hover:text-black-500 transition-all hover:shadow-black ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;