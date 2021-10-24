import { useContext } from "react";
import { AuthContext, UserContext } from "../pages/_app";
import Link from 'next/link'
interface UserInfoProps {
    name: string
}

export default function UserInfo({ name }: UserInfoProps): JSX.Element {
    const { setIsLoggedIn } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const logOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(undefined);
    }
    return (
        <div className="flex justify-between items-center gap-4">
            <p className="text-blue-600 px-3">{name}</p>
            <div className="flex gap-4 items-center">
                <Link href="/drive">
                    <img src="/images/drive.svg" className="w-8 cursor-pointer" />
                </Link>
                <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full" onClick={logOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                </button>
            </div>
        </div >
    )
}