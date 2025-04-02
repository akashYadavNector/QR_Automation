'use client'
import DataTable from "@/components/Dashboard/DataTable";
import { generateQRSchema } from "@/utils/yup";
import { Form, Formik, Field, ErrorMessage } from "formik"
import { useState } from "react";
import { FiLoader } from "react-icons/fi";

const Dashboard = () => {
    const [submitLoader, setSubmitLoader] = useState(false);
    const submitHandler = (e: object) => {
        console.log('this is my submit handler and below are the value');
        console.log(e);
        setSubmitLoader(true);
    }
    return (
        <div className="bg-[#e6e6e6d3] dark:bg-gray-500 h-full max-h-screen ">
            <h2 className="text-gray-800 text-xl text-center pt-2 font-bold">Fill the below details to Generate the QR Code</h2>
            <Formik
                initialValues={{ companyName: "", productName: "", qty: "", }}
                onSubmit={submitHandler}
                validationSchema={generateQRSchema}
            >
                <Form className="ml-5 p-3 mt-10 flex flex-col items-center ">
                    <div className="flex justify-around w-full">
                        <div>
                            <Field as="select" className="cursor-pointer p-2 ring rounded dark:text-white" name="companyName">
                                <option value="" className="dark:bg-gray-400">Select Company</option>
                                <option value="amazon" className="dark:bg-gray-400">Amazon-(Not Avaiable for now)</option>
                                <option value="flipkart" className="dark:bg-gray-400">Flipkart</option>
                                <option value="naykaa" className="dark:bg-gray-400">Nykaa</option>
                            </Field>
                            <ErrorMessage name="companyName" component="div" className="text-red-500" />
                        </div>
                        <div>
                            <Field as="select" name="productName" className="cursor-pointer mx-3 p-2 ring rounded dark:text-white">
                                <option value="" className="dark:bg-gray-400">Select Product</option>
                                <option value="str-brry" className="dark:bg-gray-400">Strawberry flavor</option>
                                <option value="mg" className="dark:bg-gray-400">Mango flavor</option>
                                <option value="km" className="dark:bg-gray-400">Kids Multivitamin - 3 flavors</option>
                                <option value="scb" className="dark:bg-gray-400">Superfruit Collagen Builder</option>
                                <option value="g" className="dark:bg-gray-400">Glutathione</option>
                                <option value="m" className="dark:bg-gray-400">Melatonin</option>
                                <option value="p" className="dark:bg-gray-400">Prenatal</option>
                                <option value="sgag" className="dark:bg-gray-400">Sampurna - Glycolic Acid Gummies</option>
                                <option value="srog" className="dark:bg-gray-400">Sampurna - Rosemary Oil Gummies</option>
                            </Field>
                            <ErrorMessage name="productName" component="div" className="text-red-500" />
                        </div>
                        <div>
                            <Field type="text" name='qty' className="ring rounded p-2" placeholder="Enter the Quantity" />
                            <ErrorMessage name="qty" component="div" className="text-red-500" />
                        </div>
                    </div>
                    <button type="submit" className={`p-3 min-w-[16rem] flex justify-center rounded-lg cursor-pointer ${submitLoader ? "bg-gray-600 hover:bg-gray-600" : " bg-[#10a86c] hover:bg-green-700"} text-gray-200 my-5 px-15`}
                        disabled={submitLoader && true}
                    >
                        {submitLoader ? <FiLoader size={30} className="animate-spin [animation-duration:2s]" /> : "Generate Qr Code"}
                    </button>
                </Form>
            </Formik>
            <DataTable />
        </div>
    )
}
export default Dashboard