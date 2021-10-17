import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

export const AuthContext = createContext(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = {isLoggedIn, setIsLoggedIn};

  return (
      <AuthContext.Provider value={auth}>
        <Component {...pageProps}/>
      </AuthContext.Provider>
    )
}
export default MyApp
