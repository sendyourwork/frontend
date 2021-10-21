export default function ProjectInfo(): JSX.Element {
    return (
        <div className="flex h-screen relative font-montserrat">
            <img src="/images/Star 6.svg" className="left-12 top-20 absolute hidden lg:block" />
            <img src="/images/Rectangle90.svg" className="bottom-10 left-40 absolute hidden lg:block" />
            <img src="/images/Rectangle93.svg" className="top-8 right-52 absolute hidden lg:block" />
            <img src="/images/Rectangle94.svg" className="right-12 top-3/4 absolute hidden lg:block" />
            <div className="w-full lg:w-3/5 mx-auto font-montserrat flex flex-col justify-center">
                <div className="text-center lg:text-left px-12 lg:px-28">
                    <span className="font-bold text-4xl italic">Short video presenting our <span className="text-greenLight">{"<"}<span className="text-gray-400">App</span> {"/>"}</span> and showing realization and our simple concept...</span>
                </div>
                <div className="w-full h-2/3 py-14 px-28">
                    <iframe className="w-full h-full myShadowVideo" src="https://www.youtube.com/embed/fqARSwfsV9w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}