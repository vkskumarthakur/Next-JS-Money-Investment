"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname)

  const getActiveClass = (path) => (
    pathname === path ? 'bg-[#d5ca8a]  text-black' : 'text-white'
  );

  return (
    <div className='fixed md:static bottom-0 w-full p-3 bg-black md:w-auto'>
      <ul className='flex flex-row justify-center md:justify-center items-center md:flex-col gap-3 h-full'>
        <Link href='/dashboard' title='Dashboard'>
          <li className={`p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 ${getActiveClass('/dashboard')}`}>
            <MdOutlineDashboard className={`text-xl group-hover:text-black ${getActiveClass('/dashboard')}`} />
          </li>
        </Link>
        <Link href='/user' title='User'>
          <li className={`p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 ${getActiveClass('/user')}`}>
            <FaRegUser className={`text-xl group-hover:text-black ${getActiveClass('/user')}`} />
          </li>
        </Link>
        <Link href='/data' title='Data'>
          <li className={`p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 ${getActiveClass('/data')}`}>
            <FiDatabase className={`text-xl group-hover:text-black ${getActiveClass('/data')}`} />
          </li>
        </Link>
        <Link href='/settings' title='Settings'>
          <li className={`p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 ${getActiveClass('/settings')}`}>
            <FiSettings className={`text-xl group-hover:text-black ${getActiveClass('/settings')}`} />
          </li>
        </Link>
        <Link href='/logout' title='Logout' className='md:mt-auto md:mb-8'>
          <li className={`p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 ${getActiveClass('/logout')}`}>
            <IoMdLogOut className={`text-xl group-hover:text-black ${getActiveClass('/logout')}`} />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
