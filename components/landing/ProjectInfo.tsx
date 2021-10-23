import Image from 'next/image'

export default function ProjectInfo(): JSX.Element {
    return (
        <div className="flex h-screen relative font-montserrat" id="projectInfo">
            <img src="/images/Star 6.svg" className="left-12 top-20 absolute hidden lg:block" />
            <img src="/images/Rectangle90.svg" className="bottom-10 left-40 absolute hidden lg:block" />
            <img src="/images/Rectangle93.svg" className="top-8 right-52 absolute hidden lg:block" />
            <img src="/images/Rectangle94.svg" className="right-12 top-3/4 absolute hidden lg:block" />
            <div className="w-full lg:w-3/5 mx-auto flex flex-col justify-around">
                <h1 className="text-center text-5xl text-black font-bold">Our roadmap for future</h1>
                <div className="h-5/6  flex items-center justify-around">
                    <div className="relative w-1/3 myShadowActive h-2/3 rounded-2xl bg-main pt-8 z-0">
                        <div className="absolute bg-white w-full h-full rounded-2xl z-20">
                        </div>
                        <div className="absolute bg-yellowLight w-full h-18 rounded-xl z-10 top-12"></div>
                    </div>
                    <div className="relative w-1/3 myShadowActive h-2/3 rounded-2xl bg-main pt-8">
                        <div className="absolute bg-white w-full h-full rounded-2xl">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 641   741