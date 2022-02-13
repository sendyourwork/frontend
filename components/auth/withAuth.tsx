import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/UserContext";

const withAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();
        const {
            user: { isLoggedIn },
        } = useUser();
        useEffect(() => {
            if (!isLoggedIn) {
                router.replace("/login");
            }
        });
        if (isLoggedIn) return <Component {...props} />;
        return null;
    };
    return Auth;
};

export default withAuth;
