import React from "react";
import { Divide as Hamburger } from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'
import NavbarMenu from "./NavbarMenu";
import Fade from 'react-reveal/Fade'

export default function Navbar(): JSX.Element {
    const isMenu = useMediaQuery({ query: '(max-width: 820px)' });
    const isLoggedIn = false; //add value from react comtext
    return (
        <Fade top delay={300}>
            <div className="flex items-center w-100 h-15vh mx-3 font-montserrat lg:mx-20">
                <div className="flex h-max mr-auto text-3xl font-extrabold">
                    <span className="">Send</span>
                    <span className="text-main">Your</span>
                    <span className="">Work</span>
                </div>
                <NavbarMenu isLoggedIn={isLoggedIn} />
                <div className="block md:hidden">
                    <Hamburger color="#4158D0" />
                </div>
            </div>
        </Fade>
    )
}