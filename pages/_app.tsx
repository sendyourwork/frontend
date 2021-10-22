import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react'
import { User } from '../interfaces/user';
import getUserData from '../utils/getUserData';

export const AuthContext = createContext(undefined);
export const UserContext = createContext(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = { isLoggedIn, setIsLoggedIn };
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    (async () => {
      if(token) {
        const data = await getUserData(token);
        if(data.user) {
          setUser(data.user);
          setIsLoggedIn(true);
        }
      }
      setIsLoading(false);
    })()
  }, [])

  if(isLoading) return null

  return (
    <AuthContext.Provider value={auth}>
      <UserContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}
export default MyApp
