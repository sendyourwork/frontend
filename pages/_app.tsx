import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <Component {...pageProps} isLoggedIn={isLoggedIn}/>
}
export default MyApp
