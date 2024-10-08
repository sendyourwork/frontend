import React, { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Fade from "react-reveal/Fade";
import register from "../../utils/auth/register";
import { useUser } from "../../contexts/UserContext";

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(1, "Too short!").required("Name is required!"),
    password: Yup.string().min(6, "Too short!").required("Password is required!"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
    schoolID: Yup.string().max(5, "Too long!").required("School ID is required!"),
    classID: Yup.string().max(5, "Too long!").required("Class ID is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    privacyPolicy: Yup.boolean().isTrue("You must accept terms of privacy policy"),
});

export default function RegisterForm(): JSX.Element {
    const { logIn } = useUser();
    const [error, setError] = useState(null);
    const handleSubmit = async (values) => {
        const response = await register(values);
        if (!response.errors || !response) {
            logIn(response);
        } else if (!response) {
            setError("Something went wrong!");
        } else {
            setError(response.errors[0].param + ": " + response.errors[0].msg);
        }
    };

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
                confirmPassword: "",
                schoolID: "",
                classID: "",
                email: "",
                privacyPolicy: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col myShadow w-96 z-10 bg-white rounded-xl">
                    <h1 className="mx-5 mt-5 text-4xl font-bold pb-3">Profile</h1>
                    <h4 className="mx-5 w-14 text-center inline-block border-b-2 border-main pb-1">
                        Sign up
                    </h4>
                    <div className="flex flex-col py-5 items-center border-t border-gray-300">
                        <Field
                            name="username"
                            className="focus:myShadowActive focus:outline-none z-10 rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="Name"
                            autoComplete="off"
                        />
                        {errors.name && touched.name && (
                            <Fade top>
                                <div className="text-red-500 font-medium py-1 z-0">
                                    {errors.name}
                                </div>
                            </Fade>
                        )}
                        <Field
                            name="password"
                            type="password"
                            className="focus:myShadowActive focus:outline-none z-10 rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="Password"
                        />
                        {errors.password && touched.password && (
                            <Fade top>
                                <div className="text-red-500 font-medium z-0 py-1">
                                    {errors.password}
                                </div>
                            </Fade>
                        )}
                        <Field
                            name="confirmPassword"
                            type="password"
                            className="focus:myShadowActive focus:outline-none z-10 rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="Confirm password"
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Fade top>
                                <div className="text-red-500 font-medium z-0 py-1">
                                    {errors.confirmPassword}
                                </div>
                            </Fade>
                        ) : null}
                        <Field
                            name="schoolID"
                            className="focus:myShadowActive focus:outline-none z-10 rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="School ID"
                        />
                        {errors.schoolID && touched.schoolID ? (
                            <Fade top>
                                <div className="text-red-500 font-medium py-1 z-0">
                                    {errors.schoolID}
                                </div>
                            </Fade>
                        ) : null}
                        <Field
                            name="classID"
                            className="focus:myShadowActive focus:outline-none rounded z-10 myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="Class ID"
                        />
                        {errors.classID && touched.classID ? (
                            <Fade top>
                                <div className="text-red-500 font-medium py-1 z-0">
                                    {errors.classID}
                                </div>
                            </Fade>
                        ) : null}
                        <Field
                            name="email"
                            className="focus:myShadowActive focus:outline-none z-10 rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5"
                            placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                            <Fade top>
                                <div className="text-red-500 font-medium py-1 z-0">
                                    {errors.email}
                                </div>
                            </Fade>
                        ) : null}
                    </div>
                    <div>
                        <label className="ml-1 z-10">
                            <Field type="checkbox" name="privacyPolicy" className="ml-10" />
                            {" I accept the terms of the"}
                            <Link href="/">
                                <span className="text-main cursor-pointer"> privacy policy</span>
                            </Link>
                        </label>
                        {errors.privacyPolicy && touched.privacyPolicy ? (
                            <Fade top>
                                <div className="text-red-500 z-0 font-medium text-center py-1">
                                    {errors.privacyPolicy}
                                </div>
                            </Fade>
                        ) : null}
                        {error && (
                            <div className="text-red-500 font-medium text-center">{error}</div>
                        )}
                    </div>
                    <button type="submit" className="bg-main rounded text-white mt-5 mx-12 h-10">
                        Submit
                    </button>
                    <Link href="/login">
                        <span className="cursor-pointer text-main mt-6 mb-8 w-max mx-auto">
                            You already have account? Sign in!
                        </span>
                    </Link>
                </Form>
            )}
        </Formik>
    );
}
