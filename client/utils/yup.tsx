import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Please enter your email !"),
    otp: Yup.number().required("Please enter your email")
});
export const generateQRSchema = Yup.object().shape({
    companyName: Yup.string()
        .required("Please select the company")
        .notOneOf([''], "Please select a valid company"), // Ensures it's not the default empty string

    productName: Yup.string()
        .required("Please select the product")
        .notOneOf([''], "Please select a valid product"), // Ensures it's not the default empty string
    qty: Yup.number()
        .typeError('Quantity must be a number')
        .required("Please enter the quantity")
        .positive("Quantity must be a positive number")
        .integer("Quantity must be an integer"),
});