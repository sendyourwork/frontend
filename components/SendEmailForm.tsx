import React, { useState } from "react"
import AddFileForm from "./AddFileForm";

export default function SendEmailForm(): JSX.Element {
    const [title, setTitle] = useState('');
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="w-full h-16 px-5 myShadow flex flex-col justify-center rounded">
                {title && <p className="text-sm text-gray-400 z-10">Title</p>}
                <input
                    type="text"
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    placeholder="Title"
                    className="outline-none h-8 z-0"
                />
            </div>
            <AddFileForm />
            <button type="submit" className="w-28 ml-auto bg-blue-600 text-white rounded-3xl flex px-5 py-3 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"/></svg>
                <span>Send</span>
            </button>
        </form>
    )
}