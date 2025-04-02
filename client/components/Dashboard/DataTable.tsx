import React from 'react';
import { FaDownload } from "react-icons/fa";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const DataTable = () => {
    const invoices = [
        {
            productName: "PG MVS Multivitamin Strawberry",
            date: "11/12/2025",
            comapany: "Amazon",
            noOfQR: "250",
            paymentMethod: "Credit Card",
        },
        {
            productName: "PG MVM Multivitamin Mango",
            date: "11/12/2025",
            comapany: "Flipkart",
            noOfQR: "150",
            paymentMethod: "PayPal",
        },
        {
            productName: "PG VCO Vitamin C Orange",
            date: "11/12/2025",
            comapany: "Nykaa",
            noOfQR: "350",
            paymentMethod: "Bank Transfer",
        },
        {
            productName: "  PG VCL Vitamin C Lemon",
            date: "11/12/2025",
            comapany: "Amazon",
            noOfQR: "450",
            paymentMethod: "Credit Card",
        },
        {
            productName: "PG BB Biotin Blueberry",
            date: "11/12/2025",
            comapany: "Amazon",
            noOfQR: "550",
            paymentMethod: "PayPal",
        },
    ];

    return (
        <div className=" rounded-xl bg-[#1d7463] mx-5 text-white">
            <h2 className="text-center text-lg font-bold pt-2">Recently Created QR</h2>
            <Table className="w-full">
                <TableHeader className="sticky top-0 bg-[#0e3d35] z-10 text-white">
                    <TableRow>
                        <TableHead className="w-[25%] text-white">Product Name</TableHead>
                        <TableHead className="w-[25%] text-white">Generated Date</TableHead>
                        <TableHead className="w-[25%] text-white">Company</TableHead>
                        <TableHead className="w-[25%] text-white">Donwload</TableHead>
                        <TableHead className="w-[25%] text-right text-white">No. of QR Code</TableHead>
                    </TableRow>
                </TableHeader>
                {/* <div className="h-[20rem] overflow-y-auto"> */}
                <TableBody>
                    {invoices.map((invoice, index) => (
                        <TableRow key={index} className='hover:bg-green-900'>
                            <TableCell className="font-medium">{invoice.productName}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.comapany}</TableCell>
                            <TableCell className="flex  ml-5"><FaDownload size={40} className='cursor-pointer hover:bg-green-700 p-2 rounded-full'/></TableCell>
                            <TableCell className="text-center">{invoice.noOfQR}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {/* </div> */}
                <TableFooter className="rounded-xl bg-[#0e3d35] text-white ">
                    <TableRow className="rounded-xl rounded-b-2xl">
                        <TableCell colSpan={4}>Total Generated QR till now</TableCell>
                        <TableCell className="text-center">200</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default DataTable;