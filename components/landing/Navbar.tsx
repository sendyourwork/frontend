import React, { useContext } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavbarMenu from "./NavbarMenu";
import Fade from "react-reveal/Fade";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useUser } from "../../contexts/UserContext";

export default function Navbar(): JSX.Element {
    const { isLoggedIn } = useUser();
    const textBox = useRef<HTMLDivElement>(null);
    const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
    // isPhone ? textBox.current?.classList.add('mx-auto') : textBox.current?.classList.remove('mx-auto');
    return (
        <Fade top delay={300}>
            <nav className="flex items-center w-100 h-15vh font-montserrat bg-transparent justify-center md:justify-between mx-0 md:mx-20">
                <div className="flex flex-col text-center h-max text-3xl font-extrabold mt-10 md:mt-0">
                    <div className="h-max flex">
                        <span className="inline-block">Send</span>
                        <span className="inline-block text-main">Your</span>
                        <span className="inline-block">Work</span>
                    </div>
                </div>
                <NavbarMenu isLoggedIn={isLoggedIn} />
            </nav>
        </Fade>
    );
}
