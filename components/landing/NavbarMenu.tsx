import Link from "next/link";
import { useUser } from "../../contexts/UserContext";

export default function NavbarMenu(): JSX.Element {
    const {
        user: { isLoggedIn },
    } = useUser();
    return (
        <div className="hidden md:flex justify-center items-center">
            <div className="flex h-max items-center text-gray-400 hover:text-gray-600 transition duration-500">
                <span className="mx-3 cursor-pointer lg:mx-5">
                    <a href="#projectInfo">Our roadmap</a>
                </span>
            </div>
            <div className="flex ml-6 h-max">
                {isLoggedIn ? (
                    <Link href="/home">
                        <span className="py-2 px-3 border-2 border-main rounded text-main hover:text-white hover:bg-main transition duration-300 font-medium cursor-pointer">
                            Home
                        </span>
                    </Link>
                ) : (
                    <Link href="/login">
                        <button className="py-2 px-3 border-2 border-main rounded text-main hover:text-white hover:bg-main font-medium cursor-pointer">
                            Log in
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
