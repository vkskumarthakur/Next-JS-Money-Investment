import React from "react";
import Link from "next/link";
import { FiBell } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
    <div className="px-6 py-3 bg-black">
      <nav className="text-white flex items-center justify-between">
        <div className="nav-logo flex items-center justify-start gap-3">
          <FaIndianRupeeSign />
          <Link href="/">
            <p className="font-bold">Dashboard</p>
          </Link>
        </div>
        <div className="bg-[#26221f] flex items-center justify-start gap-2 py-2 px-4 rounded-full">
        <CiSearch className="text-xl" />
          <input type="text" className="bg-transparent outline-none" placeholder="Search for anything" />
        </div>
        <div className="nav-menu flex items-center justify-between gap-5">
          <ul className="flex justify-between items-center gap-3">
            <FiBell
              style={{ color: "#ffffff", fontSize: "20px" }}
              className="cursor-pointer"
            />
            <li>
              <Link href="/">iUser</Link>
            </li>
          </ul>
          <div className="avatar w-10 h-10 p-2 bg-white rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
