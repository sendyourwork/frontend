import { useContext, useEffect } from "react";
import { AuthContext } from "../pages/_app";
import { useRouter } from 'next/router';

const withoutAuth = Component => {
    const Auth = (props) => {
        const router = useRouter();
        const { isLoggedIn } = useContext(AuthContext);
        useEffect(() => {
            if (isLoggedIn) {
                router.replace('/home');
            }
        })
        if(!isLoggedIn) return (
            <Component {...props} />
        );
        return null;
    };
    return Auth;
  };
  
  export default withoutAuth;