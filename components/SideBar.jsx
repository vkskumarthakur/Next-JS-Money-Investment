import React from 'react'
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className='p-3 bg-white w-[20%]'>
        <ul className='text-black flex flex-col gap-3'>
        <Link href='/dashboard'> <li className='p-2 hover:bg-gray-400 rounded-md'>Dashboard</li></Link>
        <Link href='/user'><li className='p-2 hover:bg-gray-400 rounded-md'>User</li></Link>
        <Link href='/data'><li className='p-2 hover:bg-gray-400 rounded-md'>Data</li></Link>
        <Link href='/settings'><li className='p-2 hover:bg-gray-400 rounded-md'>Settings</li></Link>
        </ul>
    </div>
  )
}

export default SideBar