import React, { useEffect, useRef, useState } from "react"
import loginWithNameAndPassword from "../utils/loginWithNameAndPassword";
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'



export default function RegisterForm(): JSX.Element {
    return (
        <form className="flex flex-col myShadow w-96">
            <h1 className="mx-5 mt-5 text-4xl font-bold pb-3">Profile</h1>
            <h4 className="mx-5 w-14 text-center inline-block border-b-2 border-main pb-1">Sign up</h4>
            <div className="flex flex-col py-5 items-center border-t border-gray-300">
                <input
                    className="focus:outline-main rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5" placeholder="E-mail"
                    type="text"
                    name="email" />
                <input
                    className="rounded myShadow w-10/12 h-12 m-2 py-2 pl-3.5 focus:outline-main" placeholder="Password"
                    type="password"
                    name="password" />
                <input
                    className="focus:outline-main rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5" placeholder="E-mail"
                    type="text"
                    name="email" />
                <input
                    className="rounded myShadow w-10/12 h-12 m-2 py-2 pl-3.5 focus:outline-main" placeholder="Password"
                    type="password"
                    name="password" />
            </div>
            <input
                type="checkbox"
                name="privacyPolicy"
            />
            <div>
                <label htmlFor="privacyPolicy" className="ml-2" > I accept the terms of the
                    <Link href="/" >
                        <span className="text-main cursor-pointer"> privacy policy</span>
                    </Link >
                </label >
            </div>
            <input
                className="bg-main rounded text-white mt-5 mx-12 h-10 cursor-pointer disabled:bg-gray-300"
                type="submit"
                value="Sign up"
            />
            <Link href="/register">
                <span className="cursor-pointer text-center text-main mt-6 pb-8">You already have account? Sign in!</span>
            </Link>
        </form>
    )
}

// onChange = {(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
// onChange = {(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
// onChange = {(e: React.FormEvent<HTMLInputElement>) => setprivacyPolicy(!privacyPolicy)}