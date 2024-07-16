import React from 'react'
import Header from './Header';
import SideBar from './SideBar';

const MainLayout = ({children}) => {
  return (
   <main className='min-h-screen'>
   <Header/>
   <div className="flex text-white max-w-[1440px] m-auto" style={{minHeight:`calc(100vh - 65px)`}}>
   <SideBar/>
   <div className="w-[80%] bg-gray-900">{children}</div>
    </div>
   </main>  )
}

export default MainLayout