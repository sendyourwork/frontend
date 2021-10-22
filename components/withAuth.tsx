import { useContext, useEffect } from "react";
import { AuthContext } from "../pages/_app";
import { useRouter } from 'next/router';

const withAuth = Component => {
    const Auth = (props) => {
        const router = useRouter();
        const { isLoggedIn } = useContext(AuthContext);
        useEffect(() => {
            if (!isLoggedIn) {
                router.replace('/login');
            }
        }, [])
        if(isLoggedIn) return (
            <Component {...props} />
        );
        return null;
    };
    return Auth;
  };
  
  export default withAuth;