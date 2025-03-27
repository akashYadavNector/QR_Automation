'use client'
import DashboardHeader from "@/components/Dashboard/Header"
import DashboardSidebar from "@/components/Dashboard/Sidebar"
import { useState } from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <div className={`flex ${dark ? "dark" : ""}`}>
      <DashboardSidebar dark={dark} />
      <div className="flex flex-col w-10/12">
        <DashboardHeader setDark={setDark} dark={dark} />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout