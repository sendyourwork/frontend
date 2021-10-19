import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import { Props } from 'react'

interface LinkButtonProps {
    linkProps: string,
}

export default function Main({ linkProps }: LinkButtonProps): JSX.Element {
    return (
        <main className="flex h-85vh font-montserrat relative flex-col lg:flex-row items-center xl:items-start overflow-x-hidden">
            <Fade top delay={300}>
                <img src="/Star 6.svg" className="left-4 transform hover:rotate-180 transition duration-500 hidden lg:block absolute" />
                <img src="/Rectangle90.svg" className="top-3/4 left-1/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/Circle91.svg" className="bottom-8 left-2/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/Rectangle93.svg" className="top-12 left-2/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/Rectangle94.svg" className="right-12 top-3/4 transform transition duration-500 hidden lg:block absolute" />
            </Fade>
            <Fade left delay={700}>
                <div className="flex h-5/6 justify-center">
                    <div className="flex flex-col w-7/12 h-full justify-center mt-12 md:mt-0">
                        <span className="font-montserrat font-extrabold text-4xl md:text-6xl">Send your homework safe and simple</span>
                        <span className="mt-4 text-m font-medium">We are help education in the world. We make world a better place.</span>
                        <div className="mt-4">
                            <Link href={linkProps} passHref={true}>
                                <button className="bg-main text-white text-sm md:text-base rounded h-8 w-24 font-normal md:h-10 md:w-32">Get started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right delay={700}>
                <div className="flex items-center justify-end w-screen px-5 md:px-0 md:mr-10 h-5/6 md:w-1/2">
                    <img src="/Group 146.png" className="myShadow" />
                </div>
            </Fade>
        </main>
    )
}
