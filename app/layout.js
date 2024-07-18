import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard App",
  description: "ONDC Dashoboard Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className='{inter.className} bg-gray-300 p-2 min-h-screen' style={{ backgroundImage: "" }}>
        <MainLayout>{children} </MainLayout>
       </body>
    </html>
  );
}
