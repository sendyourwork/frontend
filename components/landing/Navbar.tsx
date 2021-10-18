import React from "react";
import { Divide as Hamburger } from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'
import NavbarMenu from "./NavbarMenu";
import Fade from 'react-reveal/Fade'
import { useState, useRef } from "react";

export default function Navbar(): JSX.Element {
    const textBox = useRef<HTMLDivElement>(null)
    const [isOpen, setOpen] = useState(false);
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })
    const isLoggedIn = false; //add value from react comtext
    isPhone ? textBox.current?.classList.add('mx-auto') : textBox.current?.classList.remove('mx-auto');
    return (
        <Fade top delay={300}>
            <div className="flex items-center w-100 h-15vh mx-3 font-montserrat lg:mx-20 bg-transparent">
                <div className="flex h-max mr-auto text-3xl font-extrabold" ref={textBox}>
                    <span className="">Send</span>
                    <span className="text-main">Your</span>
                    <span className="">Work</span>
                </div>
                <NavbarMenu isLoggedIn={isLoggedIn} />
            </div>
        </Fade >
    )
}