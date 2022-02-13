import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { User } from "../interfaces/user";

const UserContext = createContext(undefined);

const initialUser: User = {
    isLoggedIn: false,
    accessToken: "",
    username: "",
    school_class: "",
    role: "user",
};

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState<User>(initialUser);
    const [isLoading, setIsLoading] = useState(true);
    const getUser = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                setIsLoading(true);
                const response = await fetch(BACKEND_URL + "/user", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                });
                const data = await response.json();
                if (data.user) {
                    setUser({ isLoggedIn: true, ...data.user });
                }
            } catch (err) {
                logOut();
            }
        }
        setIsLoading(false);
    };
    const logIn = (loginData) => {
        localStorage.setItem("token", loginData.accessToken);
        setUser({ isLoggedIn: true, ...loginData });
    };
    const logOut = () => {
        localStorage.removeItem("token");
        setUser(initialUser);
    };
    useEffect(() => {
        getUser();
    }, []);
    if (isLoading) return null;
    return (
        <UserContext.Provider value={{ user, getUser, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
};
