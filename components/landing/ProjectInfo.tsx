import Fade from 'react-reveal/Fade'

export default function ProjectInfo(): JSX.Element {
    return (
        <Fade>
            <div className="flex h-screen relative">
                <img src="/Star 6.svg" className="left-12 top-20 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                <img src="/Rectangle90.svg" className="bottom-10 left-40 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                <img src="/Circle91.svg" className="bottom-24 left-2/4 absolute transform hover:rotate-180 hover:scale-125 transition duration-500" />
                <img src="/Rectangle93.svg" className="top-8 right-52 absolute transform hover:rotate-180 hover:scale-150 transition duration-500" />
                <img src="/Rectangle94.svg" className="right-12 top-3/4 absolute transform hover:rotate-180 hover:scale-50 transition duration-500" />
                <div className="w-3/5 bg-gray-700 mx-auto mt-52 myShadow">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/fqARSwfsV9w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </Fade>
    )
}