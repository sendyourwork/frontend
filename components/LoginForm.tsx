import React, { useEffect, useRef, useState } from "react"
import loginWithNameAndPassword from "../utils/loginWithNameAndPassword";
import Link from 'next/link'

export default function LoginForm(): JSX.Element {
    const submitRef = useRef<HTMLInputElement>(null)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [privacyPolicy, setprivacyPolicy] = useState(false);
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log();
        name && password && privacyPolicy ? loginWithNameAndPassword(name, password) : false;
    }
    useEffect(() => {
        name && password ? submitRef.current?.removeAttribute('disabled') : submitRef.current?.setAttribute('disabled', 'disabled');
    }, [name, password])
    return (
        <form action="" className="flex w-auto flex-col rounded-xl myShadow z-10 bg-white" onSubmit={handleSubmit}>
            <h1 className="mx-5 mt-5 text-4xl font-bold pb-3">Profile</h1>
            <h4 className="mx-5 w-12 text-center inline-block border-b-2 border-main pb-1">Sign in</h4>
            <div className="flex flex-col py-5 items-center border-t border-gray-300">
                <input
                    className="focus:outline-main rounded myShadow w-10/12 h-12 my-2 py-2 pl-3.5" placeholder="E-mail"
                    type="text"
                    name="email"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
                <input
                    className="rounded myShadow w-10/12 h-12 m-2 py-2 pl-3.5 focus:outline-main" placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
            </div>
            <div className="text-left ml-8">
                <input
                    type="checkbox"
                    name="privacyPolicy"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setprivacyPolicy(!privacyPolicy)}
                />
                <label htmlFor="privacyPolicy" className="ml-2">I accept the terms of the
                    <Link href="/">
                        <span className="text-main cursor-pointer"> privacy policy</span>
                    </Link>
                </label>
            </div>
            <input
                className="bg-main rounded text-white mt-5 mx-12 h-10 cursor-pointer"
                type="submit"
                value="Sign in"
                ref={submitRef}
            />
            <Link href="/">
                <span className="cursor-pointer text-center text-main mt-6 pb-8">Dont’t have account? Sign up!</span>
            </Link>
        </form>

    )
}
