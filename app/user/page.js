import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import DashBoardHigestACoSTableData from "@/components/DashBoardHigestACoSTableData";
import DashboardSmallCardData from "@/components/DashboardSmallCardData";
import { MdOutlineDashboard } from "react-icons/md";
import { TiFolderDelete } from "react-icons/ti";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import DoughnutChart from "@/components/DoughNutChart";


export default function Dashboard() {
  return (
    <div className="" style={{ minHeight: `calc(100vh - 65px)` }}>
      <div className="user-main">
        <div className="user-main__header flex items-center justify-between">
          <div className="left-tab flex items-center justify-start gap-4">
            <div className="flex items-center justify-start gap-3">
              <span>Profile</span>
            </div>
          </div>
        </div>

        {/* dashboard cards starts here */}

        <div className="user-cards flex flex-col md:flex-row items-stretch justify-between gap-6 mt-5">
          <div className="card bg-[#b9c1b6] p-5 flex-1 rounded-2xl transition ease-in-out duration-300 hover:-translate-y-3">
            <div className="card-title flex items-center justify-between">
              <p className="font-bold text-black text-lg">Summary</p>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="summary card-body flex items-start my-3 flex-col justify-between gap-1 px-2">
              <div className="p-3 rounded-xl text-black w-full bg-[#d2e0fa] font-semibold flex items-center justify-between">
                <span>Overview</span>
              <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d1f2f9] font-semibold flex items-center justify-between">
                <span>Campaigns</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d0f9e7] font-semibold flex items-center justify-between">
                <span>Adgroup</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#f7f9d2] font-semibold flex items-center justify-between">
                <span>Keyword</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d2e0fa] font-semibold flex items-center justify-between">
                <span>Overview</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d1f2f9] font-semibold flex items-center justify-between">
                <span>Campaigns</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#d0f9e7] font-semibold flex items-center justify-between">
                <span>Adgroup</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
              </div>
              <div className="p-3 rounded-2xl text-black w-full bg-[#f7f9d2] font-semibold flex items-center justify-between">
                <span>Keyword</span>
                <div className="bg-[#B9C1B6] rounded-2xl px-2"><span className="font-light text-sm">140.16</span></div>
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
            <div className="top-products card-body flex items-start my-3 flex-col justify-between gap-1">
              <div className="w-full font-semibold">
                <span className="text-center block text-gray-600">
                  Total Score
                </span>
              </div>
              <div className="text-black w-full text-3xl font-bold">
                <span className="text-center block text-black">2,985</span>
              </div>
              <div className="mx-auto">
                <DoughnutChart/>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
