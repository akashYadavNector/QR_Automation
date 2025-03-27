'use client'
import Image from "next/image"
import React from "react";
import { IoSunny } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
    setDark: (value: boolean) => void;
    dark: boolean
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ setDark, dark }) => {
    const router = useRouter()
    const goToSettingsHandler = () => {
        console.log('hey this is go  to handler fxxn');
        
        router.push("/dashboard/settings")
    }
    return (
        <div className="bg-[#95D2B3] w-full px-2 relative place-self-end dark:bg-[#2c2d2e] duration-500 ">
            <div className="flex justify-end items-center">

                {
                    dark ?
                        <FaCloudMoon size={45} color="#fff" className="cursor-pointer mx-1" onClick={() => setDark(false)} />
                        :
                        <IoSunny size={45} color="#FFD95F" className="cursor-pointer mx-1" onClick={() => setDark(true)} />
                }
                <IoMdSettings onClick={goToSettingsHandler} size={45} className="cursor-pointer animate-spin [animation-duration:5s] mx-3" color={`${dark ? "#fff" : "#838383"}`} />
                <Image
                    src={"/user.png"}
                    width={70}
                    height={40}
                    alt="No image found"
                    className="mx-1 cursor-pointer hover:opacity-50 hover:brightness-50 duration-300"
                />
            </div>
        </div>
    )
}

export default DashboardHeader