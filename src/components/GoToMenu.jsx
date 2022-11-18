import React from "react";
import { Link } from "react-router-dom";

const GoToMenu = () => {
  return (
    <div className="text-center mt-20 ">
      <h1 className="m-3 font-bold text-2xl">Welcome to Food's Kitchen</h1>
      <Link to="/menu" relative="path">
        <button className="w-50 px-3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          GO TO MENU
        </button>
      </Link>
    </div>
  );
};

export default GoToMenu;
