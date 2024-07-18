import React from 'react'
import Link from 'next/link';
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";


const SideBar = () => {
  return (
    <div className='absolute md:static bottom-0 w-full p-3 bg-black md:w-auto'>
        <ul className='flex flex-row justify-center  md:flex-col gap-3'>
        <Link href='/dashboard'> <li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><MdOutlineDashboard className="text-xl text-white group-hover:text-black" /></li></Link>
        <Link href='/user'><li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><FaRegUser className="text-xl text-white group-hover:text-black" /></li></Link>
        <Link href='/data'><li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><FiDatabase className="text-xl text-white group-hover:text-black" /></li></Link>
        <Link href='/settings'><li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><FiSettings className="text-xl text-white group-hover:text-black" /></li></Link>
        </ul>
    </div>
  )
}

export default SideBar