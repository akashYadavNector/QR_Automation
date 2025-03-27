'use client'
import { LoginSchema } from '@/utils/yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FiLoader } from "react-icons/fi";


export const Login = () => {
    const [minute, setMinute] = useState(1);
    const [seconds, setSeconds] = useState(59);
    const [submitLoader, setSubmitLoader] = useState(false);
    const [OTPLoader, SetOTPLoader] = useState(false)
    const emailRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter()
    const OTPTimer = () => {
        let intervalId = setInterval(() => {
            setMinute((prev) => 0)
            console.log(`This is seconds inside my setIntervals ${seconds}`);
            if (seconds == 0) {
                console.log('hey seconds reached to 0');
                setMinute((prev) => 1);
                return clearInterval(intervalId)
            }
            setSeconds(((preValue) => {
                SetOTPLoader(false);
                if (preValue === 0) {
                    console.log('hey the value reached to 0');
                    clearInterval(intervalId)
                    return 59
                }
                console.log(`This is seconds inside my setSeconds section ${preValue}`);
                return preValue - 1
            }))
        }, 1000);
    }       
    const OTPClickHandler = () => {
        SetOTPLoader(true);
        return new Promise(async (resolve, reject) => {
            const fetchItem = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await fetchItem.json()
            console.log('below is the result');
            console.log(typeof result);
            console.log(result);
            if (typeof result === "object" && result !== null) {
                console.log('im entering the trueeee resullttttttttt');
                resolve("OTP HAS BEEN SENT TO THE USER ");
                OTPTimer()
            } else {
                reject("OTP has been rejected for now")
            }
            console.log('testinggggggg my point');
        })
    }

    const submitHandler = (e: object) => {
        setSubmitLoader(true)
        console.log(e);
        router.push("dashboard")
    }
    // console.log(emailRef.current?.value);
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
                <Formik
                    initialValues={{ email: "", otp: "" }}
                    onSubmit={submitHandler}
                    validationSchema={LoginSchema}
                >
                    <Form>
                        <div className='flex w-full relative my-3'>
                            <Field type="email" ref={emailRef} name='email' className='py-5 px-2 w-8/12 border rounded-l border-gray-400 border-r-0 p-2' placeholder='Enter you email here ' />
                            <ErrorMessage name='email' component="span" className='text-red-700 absolute bottom-[-18] text-[13px]' />
                            <button
                                type='button'
                                className={`${minute !== 1 && seconds !== 59 ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"}  duration-300  py-5 cursor-pointer text-white p-2 w-4/12 rounded-r-lg flex justify-center`}
                                disabled={minute !== 1 && seconds !== 59 && true}
                                onClick={OTPClickHandler}
                            >
                                {minute !== 1 && seconds !== 59 ? `${minute} : ${seconds}` : (OTPLoader ? <FiLoader size={30} className='animate-spin [animation-duration:2s]' /> : "Sent OTP")}
                            </button>
                        </div>
                        <div className='flex w-full items-center relative my-3'>
                            <Field type="text" name="otp" placeholder='Enter your OTP' className='w-8/12 my-5 ring ring-gray-400 p-3 rounded' />
                            <ErrorMessage name='otp' component="span" className='text-red-700 absolute bottom-0 text-[13px]' />
                            <span className='w-4/12 text-[14px] px-2 font-bold text-center'>Enter the OTP which you have received on your mail </span>

                        </div>
                        <button
                            className={`bg-blue-500 hover:bg-blue-800 ${submitLoader && ""}  flex justify-center duration-500 p-3 my-5 rounded cursor-pointer text-white w-full `}
                            type='submit'
                            // onClick={submitHandler}
                            disabled={submitLoader && true}
                        >{submitLoader ? <FiLoader size={30} className='animate-spin [animation-duration:2s]' /> : "Submit"}</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
