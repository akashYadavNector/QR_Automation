import Image from 'next/image'
import React from 'react'

export const Login = () => {
    return (
        <div className='h-screen relative'
            style={{
                backgroundImage: "url('/Birds.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className='flex flex-col items-center shadow-2xl min-w-[30rem] min-h-[18rem] shadow-black bg-white rounded-xl p-5 top-[20%] left-[30%] absolute'>
                <Image
                    src={"/Nector.svg"}
                    width={200}
                    height={200}
                    alt='NO Image Found'
                />
                <h1 className='text-center text-lg my-4 underline'>QR Generation & Authentication</h1>
                <div className='flex w-full'>
                    <input type="text" className='py-5 px-2 w-8/12 border rounded-l border-gray-400 border-r-0 p-2' placeholder='Enter you email here ' />
                    <button className=' bg-green-500 duration-300 hover:bg-green-700 py-5 cursor-pointer text-white p-2 w-4/12 rounded-r-lg'>Send OTP</button>
                </div>
                <div className='flex w-full items-center '>
                    <input type="text" placeholder='Enter your OTP' className='w-8/12 my-5 ring ring-gray-400 p-3 rounded' />
                    <span className='w-4/12 text-[14px] px-2 font-bold text-center'>Enter the OTP which you have received on your mail </span>
                </div>
                <button className='bg-blue-500 hover:bg-blue-800 p-3 my-5 rounded duration-300 cursor-pointer text-white w-full '>Login</button>
            </div>
        </div>
    )
}
