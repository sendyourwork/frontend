import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

interface LinkButtonProps {
    linkProps: string,
}

export default function Main({ linkProps }: LinkButtonProps): JSX.Element {
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <main className="flex h-85vh font-montserrat relative flex-col lg:flex-row items-center xl:items-start overflow-x-hidden">
            <Fade top delay={300}>
                <img src="/images/Star 6.svg" className="left-4 transform hover:rotate-180 transition duration-500 hidden lg:block absolute" />
                <img src="/images/Rectangle90.svg" className="top-3/4 left-1/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/images/Circle91.svg" className="bottom-8 left-2/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/images/Rectangle93.svg" className="top-12 left-2/4 transform transition duration-500 hidden lg:block absolute" />
                <img src="/images/Rectangle94.svg" className="right-12 top-3/4 transform transition duration-500 hidden lg:block absolute" />
            </Fade>
            <Fade left delay={700}>
                <div className="flex h-5/6 justify-center">
                    <div className="flex flex-col w-7/12 h-full justify-center mt-12 md:mt-0">
                        <span className="font-montserrat font-extrabold text-4xl md:text-6xl">Send your homework safe and simple</span>
                        <span className="mt-4 text-m font-medium">We are here in order to help education in the world. We make world a better place.</span>
                        <div className="mt-4">
                            {!isPhone ?
                                <Link href={linkProps} passHref={true}>
                                    <button className="bg-main text-white hover:text-main hover:bg-white border-2 border-main transition duration-200 text-sm md:text-base rounded h-8 w-24 font-medium md:h-10 md:w-32">Get Started</button>
                                </Link>
                                : <div className="mt-2">
                                    <a href="#downloadInfo" className="w-10 h-52 bg-main p-2 rounded text-white font-medium">Get Started</a>
                                    <Link href="/login">
                                        <a className="text-l text-main font-medium ml-5">Log in</a>
                                    </Link>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right delay={700}>
                <div className="flex items-center justify-end w-screen px-5 mt-10 md:mt-0 md:px-0 md:mr-10 h-5/6 md:w-1/2">
                    <img src="/images/image 1.png" className="myShadow" />
                </div>
            </Fade>
        </main>
    )
}
