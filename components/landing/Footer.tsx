export default function Footer(): JSX.Element {
    return (
        <footer className="w-100 h-20vh font-montserrat flex items-center">
            <div className="w-1/2 flex justify-center">
                <div className="flex flex-col w-max md:w-1/3">
                    <span className="font-bold text-l md:text-xl">Work<span className="text-greenLight">with</span>us</span>
                    <span className="font-bold ml-6 mt-2 text-sm">If you&apos;re young web-dev who wanna join our team and built our app with us, mail us! </span>
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="flex flex-col w-max md:w-1/3">
                    <span className="font-bold text-l md:text-xl">Contact<span className="text-greenLight">Us</span></span>
                    <ul className="ml-6 mt-2 font-bold text-sm md:text-l">
                        <li className="">Mail<span className="text-greenLight">: </span>contact@sendyourwork.com</li>
                        <li className="">Facebook<span className="text-yellowLight">: </span><span className="italic">Soon!</span></li>
                        <li className="">Phone<span className="text-orangeLight">: </span><span className="italic">Soon!</span></li>
                        <li className="">Twitter<span className="text-main">: </span><span className="italic">Soon!</span></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}