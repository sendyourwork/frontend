import GenerateQRCode from "../qr/GenerateQRCode";
import Link from "next/link";
import {BACKEND_URL} from "../../config";

export default function MobileApp(): JSX.Element {
    return (
        <div className="flex h-screen relative font-montserrat" id="app">
            <img src="/images/Star 6.svg" className="left-12 top-20 absolute hidden xl:block" />
            <img src="/images/Rectangle90.svg" className="bottom-10 left-40 absolute hidden xl:block" />
            <img src="/images/Rectangle93.svg" className="top-8 right-52 absolute hidden xl:block" />
            <img src="/images/Rectangle94.svg" className="right-12 top-3/4 absolute hidden xl:block" />
            <div className="w-full lg:w-3/5 mx-auto flex flex-col justify-evenly">
                <h1 className="text-center text-5xl text-black font-bold">Download our Android app</h1>
                <div className="h-5/6 flex items-center justify-around">
                    {/*<div className="relative w-1/3 myShadowActive h-92 rounded-2xl bg-white pt-8 z-0 pb-10">*/}
                    {/*    <div className="">*/}
                    {/*        <Link href={BACKEND_URL + "/SendYourWork.apk"}>*/}
                    {/*            <a className="flex flex-col justify-center items-center">*/}
                    {/*                <p className="text-center text-xl text-blue-700 font-bold">Click here (.apk)</p>*/}
                    {/*            </a>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*or*/}
                    <GenerateQRCode text={BACKEND_URL + "/SendYourWork.apk"} />
                </div>
            </div>
        </div >
    )
}
