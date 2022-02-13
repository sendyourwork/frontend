import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/UserContext";

const withoutAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();
        const {
            user: { isLoggedIn },
        } = useUser();
        useEffect(() => {
            if (isLoggedIn) {
                router.replace("/home");
            }
        });
        if (!isLoggedIn) return <Component {...props} />;
        return null;
    };
    return Auth;
};

export default withoutAuth;
