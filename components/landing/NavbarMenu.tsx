import Link from 'next/link'

export default function NavbarMenu({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element {
    return (
        <div className="hidden md:flex justify-center">
            <div className="flex h-max items-center text-gray-500">
                <ul className="flex column m-0 p-0">
                    <span className="mx-3 cursor-pointer lg:mx-5">
                        <a href="#projectInfo">
                            About project
                        </a>
                    </span>
                </ul>
            </div>
            <div className="flex ml-6 h-max">
                {isLoggedIn ?
                    <Link href="/drive">
                        <span className="py-2 px-3 border-2 border-main rounded text-main hover:text-white hover:bg-main font-medium cursor-pointer">
                            Drive
                        </span>
                    </Link>
                    :
                    <Link href="/login">
                        <button className="py-2 px-3 border-2 border-main rounded text-main hover:text-white hover:bg-main font-medium cursor-pointer">
                            Log in
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}