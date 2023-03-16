import React from "react";
import companyLogo from "../images/company-logo-2.png";
import {
  FaHome,
  FaNewspaper,
  FaAppStoreIos,
  FaUikit,
  FaWpforms,
  FaChartLine,
  FaDiceD20,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="col-span-1 row-span-6 bg-gray-200">
      <img
        src={companyLogo}
        className="w-4/5 mx-auto my-4 bg-white px-2 rounded-md"
        alt="Company Logo"
      />
      <div className="px-8 text-lg font-medium text-gray-500">
        <ul className="flex flex-col gap-6 mt-6">
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaHome className="text-2xl" /> <span>Dashboard</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaNewspaper className="text-2xl" /> <span>Pages</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaAppStoreIos className="text-2xl" /> <span>Application</span>{" "}
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaUikit className="text-2xl" /> <span>UI Component</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaDiceD20 className="text-2xl" /> <span>Widgets</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaWpforms className="text-2xl" /> <span>Forms</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            {" "}
            <FaChartLine className="text-2xl" /> <span>Charts</span>
            <IoIosArrowDown className="text-xl ml-auto mr-2" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
