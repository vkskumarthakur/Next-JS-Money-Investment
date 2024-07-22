import React from "react";
import Link from "next/link";
import { FiBell } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
    <div className="px-6 py-3 bg-black fixed w-full top-0">
      <nav className="text-white flex items-center justify-between">
        <div className="nav-logo flex items-center justify-start gap-3">
          <FaIndianRupeeSign />
          <Link href="/">
            <p className="font-semibold">Dashboard</p>
          </Link>
        </div>
        <div className="bg-[#26221f] flex items-center justify-start gap-2 py-2 px-4 rounded-full w-[80%]">
        <CiSearch className="text-xl" />
          <input type="text" className="bg-transparent outline-none" placeholder="Search for anything" />
        </div>
        <div className="nav-menu flex items-center justify-between gap-5">
          <ul className="hidden md:flex justify-between items-center gap-3">
            <FiBell
              style={{ color: "#ffffff", fontSize: "20px" }}
              className="cursor-pointer"
            />
            <li>
              <Link href="/">iUser</Link>
            </li>
          </ul>
          <div className="avatar w-10 h-10  bg-black border-[1px]  rounded-full overflow-hidden">
            <img src="https://avatars.githubusercontent.com/u/40897867?v=4" alt="vikas-image" className="h-full w-full"/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
