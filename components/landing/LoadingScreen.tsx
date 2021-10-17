import Fade from 'react-reveal/Fade'

export default function LoadingScreen(): JSX.Element {
    return (
        <div className="w-100 h-screen  grid place-items-center ">
            <div>
                <span className="font-extrabold font-montserrat text-6xl select-none scale-animation flex">
                    <span className="text-black">
                        <span>Send</span>
                        <div className="border-b-4 border-black mt-2 borderAnimationOne"></div>
                    </span>
                    <span className="text-main">
                        <span>Your</span>
                        <div className="w-0 border-b-4 border-main mt-2 borderAnimationTwo"></div>
                    </span>
                    <span className="text-black">
                        <span>Work</span>
                        <div className="w-0 border-b-4 border-black mt-2 borderAnimationThree"></div>
                    </span>
                </span>
            </div>
        </div>
    )
}