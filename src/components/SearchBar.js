import React from "react";
import { FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import myImage from "../images/my-photo.jpg";

const SearchBar = () => {
  return (
    <div className="bg-white w-full h-full rounded-lg flex items-center py-4 px-12 justify-between">
      <h1 className="text-xl">Your Result will be displayed here!!!</h1>
      <div>
        <div className="flex items-center gap-6 text-2xl text-gray-500">
          <FaBell className="" />
          <MdMessage />
          <img
            src={myImage}
            className="h-14 w-14 rounded-full border-spacing-4 border-gray-400 border-2"
            alt="Customer Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
