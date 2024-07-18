import Image from "next/image";
import Link from 'next/link';
import MainLayout from "@/components/MainLayout";
export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center gap-3" style={{minHeight:`calc(100vh - 65px)`}}>
     <h1 className="text-[#d5ca8a]">Welcome to Dashboard</h1>
     <Link href='/dashboard' title='GO'><button className="py-2 px-5 rounded-sm bg-white text-black">Start</button></Link>
    </div>
  );
}
