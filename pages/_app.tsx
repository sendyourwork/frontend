import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react'
import { User } from '../interfaces/user';
import getUserData from '../utils/getUserData';
import Head from 'next/head';

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
    <>
      <Head>
        <link rel="icon" sizes="192x192" href="/images/logo.png" />
        <meta name="description" content="Send your work simply and safely." />
        <meta name='theme-color' content='#4158D0' />
        <meta name="og:title" content="Send Your Work"/>
        <meta name="og:description" content="Send your work simply and safely."/>
        <meta name="og:image" content="/images/ogImage.png"/>
      </Head>
      <AuthContext.Provider value={auth}>
        <UserContext.Provider value={{user, setUser}}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}
export default MyApp
