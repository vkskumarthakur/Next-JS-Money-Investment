import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { MdOutlineDashboard } from "react-icons/md";
import { TiFolderDelete } from "react-icons/ti";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="" style={{minHeight:`calc(100vh - 65px)`}}>
     <div className="dashboard-main">
      <div className="dashboard-main__header flex items-center justify-between">
        <div className="left-tab flex items-center justify-start gap-4">
        <div className="flex items-center justify-start gap-3">
        <span className="font-bold">1</span>
        <span>Overview</span>
        </div>
        <div className="flex items-center justify-start gap-3">
        <span className="font-bold">2</span>
        <span>PPC</span>
        </div>
        <div className="flex items-center justify-start gap-3">
        <span className="font-bold">3</span>
        <span>Year to year...</span>
        </div>
        <div className="flex items-center justify-start gap-3">
        <span className="font-bold">4</span>
        <span>Customize</span>
        </div>
        </div>
        <div className="right-tab flex items-center justify-end gap-4">
          <div>Calendar things</div>
          <div>
          <ul className='flex items-center justify-start gap-3'>
        <li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><TiFolderDelete className="text-xl text-white group-hover:text-black" /></li>
        <li className='p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110'><FiPlusSquare className="text-xl text-white group-hover:text-black" /></li></ul>
          </div>
        </div>
      </div>

      {/* dashboard cards starts here */}

      <div className="dashboard-cards flex items-stretch justify-between gap-5 mt-5">
        <div className="card bg-[#b9c1b6] p-5 flex-1 rounded-2xl">
          <div className="card-title flex items-center justify-between">
            <p className="font-bold text-black text-lg">Summary</p>
            <BsThreeDots className="text-gray-500" />
          </div>
          <div className="card-body flex items-start my-3 flex-col justify-between gap-1">
            <div className="p-3 rounded-2xl text-black w-full bg-[#d2e0fa] font-semibold">Overview</div>
            <div className="p-3 rounded-2xl text-black w-full bg-[#d1f2f9] font-semibold">Campaigns</div>
            <div className="p-3 rounded-2xl text-black w-full bg-[#d0f9e7] font-semibold">Adgroup</div>
            <div className="p-3 rounded-2xl text-black w-full bg-[#f7f9d2] font-semibold">Keyword</div>
          </div>
        </div>
        <div className="bg-[#b0d2c1] p-5 flex-1 rounded-2xl"></div>
        <div className="bg-[#b9b6c1] p-5 flex-1 rounded-2xl"></div>
      </div>
     </div>
    </div>
  );
}
