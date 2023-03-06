import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import changePassword from "../../utils/auth/changePassword";

export default function ResetPassForm(): JSX.Element {
    const submitRef = useRef<HTMLInputElement>(null);
    const [token, setToken] = useState<string>("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (password) {
            const loginData = await changePassword(token, password);
            if (!loginData.errors || !loginData) {
                await router.push('/login');
            } else if (!loginData) {
                setError("Something went wrong!");
            } else {
                setError(loginData.errors[0].param + ": " + loginData.errors[0].msg);
            }
        }
    };
    useEffect(()=> {
        if (!router.isReady) return;
        // @ts-ignore
        setToken(router.query.token)
    }, [router.isReady, router.query.token])
    useEffect(() => {
        password
            ? submitRef.current?.removeAttribute("disabled")
            : submitRef.current?.setAttribute("disabled", "disabled");
    }, [password]);
    return (
        <form
            className="relative flex flex-col w-96 rounded-xl myShadow z-10 bg-white"
            onSubmit={handleSubmit}
        >
            <h1 className="mx-5 mt-5 text-4xl font-bold pb-3">Profile</h1>
            <h4 className="mx-5 w-12 text-center inline-block border-b-2 border-main pb-1">
                Reset
            </h4>
            <div className="flex flex-col py-5 items-center border-t border-gray-300">
                <input
                    className="focus:outline-none focus:myShadowActive myShadow rounded w-10/12 h-12 my-2 py-2 pl-3.5"
                    placeholder="New password"
                    type="password"
                    value={password}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setPassword(e.currentTarget.value)
                    }
                />
                {error && <p className="text-red-500 font-medium text-center">{error}</p>}
            </div>
            <input
                className="bg-main rounded text-white mt-5 mx-12 h-10 disabled:cursor-default cursor-pointer disabled:bg-gray-300"
                type="submit"
                value="Change password"
                ref={submitRef}
            />
            <Link href="/login">
                <span className="cursor-pointer text-center text-main mt-6 mb-8 w-max mx-auto">
                    Want to log in instead? Go here!
                </span>
            </Link>
        </form>
    );
}
