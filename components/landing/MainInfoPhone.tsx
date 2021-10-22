export default function MainInfoPhone(): JSX.Element {
    return (
        <div className="relative flex flex-col justify-center items-center h-screen font-montserrat mt-24 md:mt-0" id="downloadInfo">
            <img src="/images/Star 8.svg" className="absolute top-24 right-12" />
            <img src="/images/Circle91.svg" className="absolute w-16 top-2 left-12" />
            <img src="/images/Rectangle94.svg" className="w-16 absolute bottom-12 left-12" />
            <span className="text-3xl font-bold">Download our <span className="text-greenLight">App</span> on: </span>
            <div className="mt-5">
                <button className="bg-main rounded-md text-white w-52 h-8 font-normal">Download .apk here</button>
            </div>
            <div className=" flex flex-col">
                <div className="mt-12 flex items-center justify-left">
                    <img src="/images/google-play-logo.png" className="w-10" />
                    <span className="text-2xl ml-2 font-bold">Google play<span className="text-greenLight">:</span> <span className="italic font-normal text-gray-500">Soon!</span></span>
                </div>
                <div className="mt-2 flex items-center justify-left">
                    <img src="/images/ios-app-store-hero.png" className="w-10" />
                    <span className="text-2xl ml-2 font-bold ">App store<span className="text-greenLight">:</span> <span className="italic font-normal text-gray-500">Soon!</span></span>
                </div>
            </div>
        </div>
    )
}