import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import { User } from '../interfaces/user';

export const AuthContext = createContext(undefined);
export const UserContext = createContext(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = { isLoggedIn, setIsLoggedIn };
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <AuthContext.Provider value={auth}>
      <UserContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}
export default MyApp
