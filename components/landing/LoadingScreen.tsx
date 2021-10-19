import Fade from 'react-reveal/Fade'

export default function LoadingScreen(): JSX.Element {
    return (
        <div className="w-100 h-screen grid place-items-center">
            <div>
                <span className="font-extrabold font-montserrat text-3xl select-none scale-animation flex md:text-6xl">
                    <span className="text-black">
                        <span>Send</span>
                        <div className="border-b-4 border-black borderAnimationOne md:mt-2"></div>
                    </span>
                    <span className="text-main">
                        <span>Your</span>
                        <div className="w-0 border-b-4 border-main  borderAnimationTwo md:mt-2"></div>
                    </span>
                    <span className="text-black">
                        <span>Work</span>
                        <div className="w-0 border-b-4 border-black borderAnimationThree md:mt-2"></div>
                    </span>
                </span>
            </div>
        </div>
    )
}