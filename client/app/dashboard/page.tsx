'use client'
import { generateQRSchema } from "@/utils/yup";
import { Form, Formik, Field, ErrorMessage } from "formik"
import { useState } from "react";

const Dashboard = () => {
    const submitHandler = (e: object) => {
        console.log('this is my submit handler and below are the value');
        console.log(e);

    }
    const [companies, setCompanies] = useState([

    ])
    return (
        <div className="bg-[#fff] dark:bg-gray-500 h-full pl-8">
            <h2 className="text-black text-4xl text-center my-12 underline">Fill the below details to Generate the QR Code</h2>
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
                    <button type="submit" className="p-3 ring rounded-lg cursor-pointer bg-green-500 hover:bg-green-700 text-gray-200 my-12 px-15">Generate QR Code</button>
                </Form>
            </Formik>
        </div>
    )
}
export default Dashboard