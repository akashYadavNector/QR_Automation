'use client'
import DashboardHeader from "@/components/Dashboard/Header"
import DashboardSidebar from "@/components/Dashboard/Sidebar"
import { useState } from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <div className={`flex ${dark ? "dark" : ""}`}>
      <div className="w-2/12 fixed h-full z-20">
        <DashboardSidebar dark={dark} />
      </div>
      <div className="flex flex-col w-10/12 h-full ml-[16.67%]">
        <DashboardHeader setDark={setDark} dark={dark} />
        <div className="h-10/12">
        {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout