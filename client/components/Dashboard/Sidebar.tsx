'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';
import { IoQrCodeOutline } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { FaThList } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { BiSolidMessageEdit } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
interface LinkItem {
    label: string;
    href: string;
    icon: React.ElementType;
}
const DashboardSidebar = ({ dark }: { dark: boolean }) => {
    const [shrik, setShrink] = useState(false);
    const [links, setLinks] = useState<LinkItem[]>([
        { label: "Generate QR", href: "/dashboard", icon: IoQrCodeOutline },
        { label: "Verify Request", href: "/dashboard/request-verification", icon: FaIdCard },
        { label: "Get All QR", href: "/dashboard/get-all-qr", icon: FaListAlt },
        { label: "Modify QR", href: "/dashboard/modify-qr", icon: BiSolidMessageEdit },
    ]);
    const pathname = usePathname();
    console.log('below is the pathname of my current route');
    const names = pathname.split('/');
    const lastPathName = names[names.length - 1];
    console.log(lastPathName);
    console.log(names[names.length - 1]);
    return (
        <div className=' w-full bg-[#55AD9B] h-screen dark:bg-[#1c252e] duration-500 dark:shadow-amber-50'>
            <div className='flex p-2 justify-between items-center'>
                <Image
                    src={`${dark ? "/Nector2.svg" : "Nector.svg"}`}
                    width={150}
                    height={40}
                    alt="No image found"
                    className='ml-2'
                />
                <MdKeyboardArrowLeft size={35} color={`${dark ? 'white' : 'black'}`} className=' cursor-pointer ' />
            </div>
            <div className='flex flex-col mt-8'>
                {
                    links.map((link, index) => {
                        const path = link.href.split('/');
                        const currentPath = path[path.length - 1];
                        const isActive = currentPath === lastPathName;
                        return <Link href={link.href} className={`text-xl px-5 font-semibold text-gray-200 flex ${isActive && "bg-[#006450] text-white rounded-l-2xl ml-3"} hover:rounded-l-2xl dark:text-white dark:bg-inherit dark:hover:bg-gray-400 hover:bg-[#006450] p-3 hover:shadow-lg shadow-gray-700 hover:text-white my-2`}>
                            {<link.icon size={30} color={`${isActive ? "#fff" : "#000"}`} />} <span className='mx-3'>{link.label}</span>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default DashboardSidebar