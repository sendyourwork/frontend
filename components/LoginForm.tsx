import React, { useEffect, useRef, useState } from "react"
import loginWithNameAndPassword from "../utils/loginWithNameAndPassword";

export default function LoginForm (): JSX.Element {
    const submitRef = useRef<HTMLInputElement>(null)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(name && password) {
            loginWithNameAndPassword(name, password);
        }
    }
    useEffect(() => {
        if(name && password) {
            submitRef.current?.removeAttribute('disabled');
        }
        else{
            submitRef.current?.setAttribute('disabled', 'disabled');
        }
    }, [name, password])
    return (
        <form onSubmit = {handleSubmit} className="flex flex-col gap-8 w-max">
            <input
                className="w-64 h-14 p-4 outline-none rounded"
                type="text" 
                placeholder="Your name"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
            />
            <input 
                className="w-64 h-14 p-4 outline-none rounded"
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            />
            <input 
                className="disabled:text-black disabled:bg-white disabled:opacity-50 disabled:hover:cursor-default w-24 h-12 ml-auto rounded hover:cursor-pointer"
                type="submit" 
                value="Log in"
                ref={submitRef}
            />
        </form>
    )
}