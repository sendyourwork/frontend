export default function Navbar(): JSX.Element {
    return (
        <div className="flex items-center justify-end w-100 h-36 mx-20 text-white bg-black font-montserrat ">
            <div className="flex h-max mr-auto text-3xl font-extrabold">
                <span className="">send</span>
                <span className="text-main ">Your</span>
                <span className="">work</span>
            </div>
            <div className="flex h-max text-gray">
                <ul className="flex column m-0 p-0">
                    <li className="mx-6">About project</li>
                    <li className="mx-6">How It Works</li>
                    <li className="mx-6">About Us</li>
                </ul>
            </div>
            <div className="flex ml-6 h-max">
                <button className="p-2 border-2 border-main rounded h-1/4 text-main">Log in</button>
            </div>
        </div>
    )
}