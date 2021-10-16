import Link from 'next/link'

export default function NavbarMenu({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element {
    return (
        <>
            <div className="flex h-max text-gray-500">
                <ul className="flex column m-0 p-0">
                    <Link href="/drive">
                        <span className="mx-6 cursor-pointer">
                            About project
                        </span>
                    </Link>
                    <Link href="/drive">
                        <span className="mx-6 cursor-pointer">
                            How it works
                        </span>
                    </Link>
                </ul>
            </div>
            <div className="flex ml-6 h-max">
                {isLoggedIn ?
                    <Link href="/drive">
                        <span className="py-2 px-3 border-2 border-main rounded h-1/4 text-main font-medium cursor-pointer">
                            Drive
                        </span>
                    </Link>
                    :
                    <Link href="/login">
                        <span className="py-2 px-3 border-2 border-main rounded h-1/4 text-main font-medium cursor-pointer">
                            Log in
                        </span>
                    </Link>
                }
            </div>
        </>
    )
}