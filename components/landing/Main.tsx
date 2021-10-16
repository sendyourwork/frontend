import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'

export default function Main(): JSX.Element {
    const container = useRef<HTMLDivElement>(null)
    const containerText = useRef<HTMLDivElement>(null)
    const photoDiv = useRef<HTMLDivElement>(null)

    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
    !isMobile ? container.current?.classList.remove('flex-col') : container.current?.classList.add('flex-col')
    !isMobile ? container.current?.classList.remove('items-center') : container.current?.classList.add('items-center')
    isMobile ? containerText.current?.classList.add('w-full') : containerText.current?.classList.remove('w-1/2')
    return (
        <div className="flex h-85vh font-montserrat relative" ref={container}>
            {!isMobile &&
                <>
                    <img src="/Star 6.svg" className="left-4 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                    <img src="/Rectangle90.svg" className="top-3/4 left-1/4 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                    <img src="/Circle91.svg" className="bottom-8 left-2/4 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                    <img src="/Rectangle93.svg" className="top-12 left-2/4 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                    <img src="/Rectangle94.svg" className="right-12 top-3/4 absolute transform hover:rotate-180 hover:scale-50 transition duration-500" />
                </>
            }
            <div className="flex h-5/6 justify-center" ref={containerText}>
                <div className="flex flex-col w-7/12 h-full justify-center mt-12 md:mt-0">
                    <span className="font-montserrat font-extrabold text-4xl md:text-6xl">Send your homework safe and simple</span>
                    <span className="mt-4 text-m font-medium">We are help education in the world. We make world a better place.</span>
                    <div className="mt-4">
                        <button className="bg-main text-white rounded h-10 w-32 font-normal">Get started</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-screen px-5 md:px-0 md:mr-10 h-5/6 md:w-1/2" ref={photoDiv}>
                <img src="/Group 146.png" alt="myShadow" />
            </div>
        </div >
    )
}
