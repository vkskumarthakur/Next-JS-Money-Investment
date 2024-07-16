import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='px-6 py-3 bg-white border-b-[1px] border-black'>
      <nav className='text-black flex items-center justify-between'>
        <div className='nav-logo'>
          <p className='font-bold'>Dashboard</p>
        </div>
        <div className='nav-menu flex items-center justify-between gap-5'>
          <ul className='flex justify-between items-center gap-3'>
         
            <li>
              <Link href='#'>
                iUser
              </Link>
            </li>
          </ul>
          <div className='avatar w-10 h-10 p-2 bg-black rounded-full'></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
