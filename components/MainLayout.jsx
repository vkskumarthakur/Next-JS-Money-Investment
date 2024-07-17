import React from 'react'
import Header from './Header';
import SideBar from './SideBar';

const MainLayout = ({children}) => {
  return (
   <main className='rounded-3xl overflow-hidden' style={{minHeight:`calc(100vh - 40px)`}}>
   <Header/>
   <div className="flex text-white" style={{minHeight:`calc(100vh - 65px)`}}>
   <SideBar/>
   <div className="flex-1 py-3 px-10 bg-black">{children}</div>
    </div>
   </main>  )
}

export default MainLayout