import React, { useContext, useEffect, useRef, useState } from "react"
import loginWithNameAndPassword from "../utils/loginWithNameAndPassword";
import Link from 'next/link'
import { AuthContext, UserContext } from "../pages/_app";

export default function LoginForm(): JSX.Element {
    const submitRef = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { setUser } = useContext(UserContext);
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(username && password) {
            const loginData = await loginWithNameAndPassword(username, password);
            if(!loginData.errors || !loginData) {
                localStorage.setItem('token', loginData.accessToken);
                setUser(loginData);
                setIsLoggedIn(true);
            }
            else if(!loginData) {
                setError("Something went wrong!")
            }
            else {
                setError(loginData.errors[0].param + ": " + loginData.errors[0].msg);
            }
        }
    }
    useEffect(() => {
        username && password ? submitRef.current?.removeAttribute('disabled') : submitRef.current?.setAttribute('disabled', 'disabled');
    }, [username, password])
    return (
        <form className="relative flex flex-col w-96 rounded-xl myShadow z-10 bg-white" onSubmit={handleSubmit}>
            <h1 className="mx-5 mt-5 text-4xl font-bold pb-3">Profile</h1>
            <h4 className="mx-5 w-12 text-center inline-block border-b-2 border-main pb-1">Sing in</h4>
            <div className="flex flex-col py-5 items-center border-t border-gray-300">
                <input
                    className="focus:outline-none focus:myShadowActive myShadow rounded w-10/12 h-12 my-2 py-2 pl-3.5" 
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} />
                <input
                    className="focus:outline-none focus:myShadowActive rounded w-10/12 h-12 m-2 py-2 pl-3.5 myShadow" 
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
                {error && <p className="text-red-500 font-medium text-center">{error}</p>}
            </div>
            <input
                className="bg-main rounded text-white mt-5 mx-12 h-10 disabled:cursor-default cursor-pointer disabled:bg-gray-300"
                type="submit"
                value="Sign in"
                ref={submitRef}
            />
            <Link href="/register">
                <span className="cursor-pointer text-center text-main mt-6 mb-8 w-max mx-auto">Dont’t have account? Sign up!</span>
            </Link>
        </form>
    )
}