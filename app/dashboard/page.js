import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import DashBoardHigestACoSTableData from "@/components/DashBoardHigestACoSTableData";
import DashboardSmallCardData from "@/components/DashboardSmallCardData";
import { MdOutlineDashboard } from "react-icons/md";
import { TiFolderDelete } from "react-icons/ti";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";


export default function Dashboard() {
  return (
    <div className="" style={{ minHeight: `calc(100vh - 65px)` }}>
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
              <ul className="flex items-center justify-start gap-3">
                <li className="p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110">
                  <TiFolderDelete className="text-xl text-white group-hover:text-black" />
                </li>
                <li className="p-2 w-8 h-8 hover:bg-[#d5ca8a] rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110">
                  <FiPlusSquare className="text-xl text-white group-hover:text-black" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* dashboard cards starts here */}

        <div className="dashboard-cards flex flex-col md:flex-row items-stretch justify-between gap-6 mt-5">
          <div className="card bg-[#b9c1b6] p-5 flex-1 rounded-2xl transition ease-in-out duration-300 hover:-translate-y-3">
            <div className="card-title flex items-center justify-between">
              <p className="font-bold text-black text-lg">Summary</p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="card-body flex items-start my-3 flex-col justify-between gap-1">
              <div className="p-3 rounded-2xl text-black w-full bg-[#d2e0fa] font-semibold">
                Overview
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d1f2f9] font-semibold">
                Campaigns
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d0f9e7] font-semibold">
                Adgroup
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#f7f9d2] font-semibold">
                Keyword
              </div>
            </div>
          </div>
          <div className="bg-[#b0d2c1] p-5 flex-1 rounded-2xl transition ease-in-out duration-300 hover:-translate-y-3">
            <div className="card-title flex items-center justify-between">
              <p className="font-bold text-black text-lg">
                Top 5 Products by spend
              </p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="card-body flex items-start my-3 flex-col justify-between gap-1">
              <div className="w-full font-semibold">
                <span className="text-center block text-gray-600">
                  Total Score
                </span>
              </div>
              <div className="text-black w-full text-3xl font-bold">
                <span className="text-center block text-black">2,985</span>
              </div>
            </div>
          </div>
          <div className="bg-[#b9b6c1] p-5 flex-1 rounded-2xl transition ease-in-out duration-300 hover:-translate-y-3">
            <div className="card-title flex items-center justify-between">
              <p className="font-bold text-black text-lg">
                Higest ACoS Campaigns
              </p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="card-body my-3">
              <table className="table-auto w-full h-full border-spacing-1">
                <thead className="font-normal text-[14px] text-left text-gray-600 mb-10">
                  <tr>
                    <th>Campaign</th>
                    <th>Spend</th>
                    <th>Sales</th>
                    <th>ACoS</th>
                  </tr>
                </thead>
                <tbody>
                {DashBoardHigestACoSTableData.map((data, index) => (
                    <tr index={data.id} className="text-base">
                      <td className="text-black font-semibold pt-3">{data.campaign}</td>
                      <td className="text-gray-600 pt-3">{data.spend}</td>
                      <td className="text-gray-600 pt-3">{data.sales}</td>
                      <td className="text-red-700 font-semibold pt-3">{data.acos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* small card carousel here */}
        <div className="dashboard-scard-container flex items-stretch justify-between gap-6 mt-5 overflow-x-auto">
        {DashboardSmallCardData.map((scardData,index)=>(
          <div index = {scardData.id} className="small-card bg-[#26221f] p-5 flex-1 rounded-2xl md:min-w-auto lg:min-w-[23%]">
          <div className="small-card-title flex items-center justify-between">
            <p className="font-semibold text-white text-base">{scardData.cardTitle}</p>
            <BsThreeDots className="text-gray-500" />
          </div>
             <div className="small-card-body">
             <div><span className="text-sm font-thin text-gray-400">{scardData.DateDuration}</span></div>
           <div className="flex gap-3 justify-between">
             <div className="flex flex-col">
             <div><span className="text-[#b0d2c1] font-bold">{scardData.priceOne}</span></div>
             <div><span className="text-[#b0d2c1] font-thin text-[12px]">{scardData.priceTwo}</span></div>
             </div>
             <div className="self-end rounded-2xl bg-[#b0d2c1] py-1 px-3 flex items-center justify-between gap-2">
               <span className="text-black font-semibold block">{scardData.priceGrowLoss}
               </span>
               <BsArrowUp className="text-black" />
             </div>
           </div>
         </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}
