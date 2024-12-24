import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    age: yup.number("Enter a valid age").positive("Age must be a positive number").integer().required("Age is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
    term: yup.boolean().required("Please accept the terms and conditions")
})