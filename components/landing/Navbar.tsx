import React, { useContext } from "react";
import { Divide as Hamburger } from 'hamburger-react'
import NavbarMenu from "./NavbarMenu";
import Fade from 'react-reveal/Fade'
import { AuthContext } from "../../pages/_app";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar(): JSX.Element {
    const { isLoggedIn } = useContext(AuthContext);
    const textBox = useRef<HTMLDivElement>(null)
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })
    // isPhone ? textBox.current?.classList.add('mx-auto') : textBox.current?.classList.remove('mx-auto');
    return (
        <Fade top delay={300}>
            <nav className="flex items-center w-100 h-15vh font-montserrat mx-20 bg-transparent justify-center md:justify-between">
                <div className="flex h-max text-3xl font-extrabold">
                    <span className="inline-block">Send</span>
                    <span className="inline-block text-main">Your</span>
                    <span className="inline-block">Work</span>
                </div>
                <NavbarMenu isLoggedIn={isLoggedIn} />
            </nav>
        </Fade >
    )
}