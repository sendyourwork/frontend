import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade'

export default function Main(): JSX.Element {
    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
    return (
        <div className="flex h-85vh font-montserrat relative flex-col lg:flex-row items-center xl:items-start">
            {!isMobile &&
                <Fade top>
                    <img src="/Star 6.svg" className="left-4 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                    <img src="/Rectangle90.svg" className="top-3/4 left-1/4 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                    <img src="/Circle91.svg" className="bottom-8 left-2/4 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                    <img src="/Rectangle93.svg" className="top-12 left-2/4 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                    <img src="/Rectangle94.svg" className="right-12 top-3/4 absolute transform hover:rotate-180 hover:scale-50 transition duration-500" />
                </Fade>
            }
            <Fade left delay={600}>
                <div className="flex h-5/6 justify-center ">
                    <div className="flex flex-col w-7/12 h-full justify-center mt-12 md:mt-0">
                        <span className="font-montserrat font-extrabold text-3xl md:text-6xl">Send your homework safe and simple</span>
                        <span className="mt-4 text-m font-medium">We are help education in the world. We make world a better place.</span>
                        <div className="mt-4">
                            <button className="bg-main text-white text-sm md:text-base rounded h-8 w-24 font-normal md:h-10 md:w-32">Get started</button>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right delay={1400}>
                <div className="flex items-center justify-end w-screen px-5 md:px-0 md:mr-10 h-5/6 md:w-1/2">
                    <img src="/Group 146.png" alt="myShadow" />
                </div>
            </Fade>
        </div >
    )
}
