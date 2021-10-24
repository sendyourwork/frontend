export default function ProjectInfo(): JSX.Element {
    return (
        <div className="flex h-screen relative font-montserrat" id="projectInfo">
            <img src="/images/Star 6.svg" className="left-12 top-20 absolute hidden xl:block" />
            <img src="/images/Rectangle90.svg" className="bottom-10 left-40 absolute hidden xl:block" />
            <img src="/images/Rectangle93.svg" className="top-8 right-52 absolute hidden xl:block" />
            <img src="/images/Rectangle94.svg" className="right-12 top-3/4 absolute hidden xl:block" />
            <div className="w-full lg:w-3/5 mx-auto flex flex-col justify-evenly">
                <h1 className="text-center text-5xl text-black font-bold">Our roadmap for future</h1>
                <div className="h-5/6 flex items-center justify-around">
                    <div className="relative w-1/3 myShadowActive h-92 rounded-2xl bg-white pt-8 z-0 pb-10">
                        <div className="">
                            <img src="/images/Q4.png" className="center z-0 pt-24" />
                            <h1 className="font-black text-3xl ml-10">2021</h1>
                            <ul className="font-medium ml-0 xl:ml-12 mt-12">
                                <li className="p-2 text-lg relative z-10">- Facebook page</li>
                                <li className="p-2 text-lg relative z-10">- Twitter page</li>
                                <li className="p-2 text-lg relative z-10">- Expanding team</li>
                                <li className="p-2 text-lg relative z-10">- Adding IOTA Blockchain</li>
                                <li className="p-2 text-lg relative z-10">- Adding multi language support</li>
                            </ul>
                        </div>
                    </div>
                    <img src="/images/Arrow 1.svg" className="" />
                    <div className="relative w-1/3 myShadowActive h-92 rounded-2xl bg-white pt-8 pb-10">
                        <img src="/images/Q1.png" className="center z-0 pt-24" />
                        <div className="relative z-10">
                            <h1 className="font-black text-3xl ml-10">2021</h1>
                            <ul className="font-medium ml-0 xl:ml-12 mt-12">
                                <li className="p-2 text-lg relative z-10">- Setting up legal entity</li>
                                <li className="p-2 text-lg relative z-10">- Faster server</li>
                                <li className="p-2 text-lg relative z-10">- Main page V2</li>
                                <li className="p-2 text-lg relative z-10">- SendYourWork Mobile App V2</li>
                                <li className="p-2 text-lg relative z-10">- Publish new roadmap </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
