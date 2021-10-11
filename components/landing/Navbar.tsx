import React from "react";
import Link from 'next/link'
export default function Navbar(): JSX.Element {
    return (
        <div className="flex items-center justify-end w-100 h-15vh mx-20 font-montserrat">
            <div className="flex h-max mr-auto text-3xl font-extrabold">
                <span className="">Send</span>
                <span className="text-main">Your</span>
                <span className="">Work</span>
            </div>
            <div className="flex h-max text-gray-500">
                <ul className="flex column m-0 p-0">
                    <Link href="/drive">
                        <span className="mx-6 cursor-pointer">
                            About project
                        </span>
                    </Link>
                    <Link href="/drive">
                        <span className="mx-6 cursor-pointer">
                            How it works
                        </span>
                    </Link>
                </ul>
            </div>
            <div className="flex ml-6 h-max">
                <button className="py-2 px-3 border-2 border-main rounded h-1/4 text-main font-medium">Log in</button>
            </div>
        </div>
    )
}