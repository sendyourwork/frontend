import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import GenerateQRCode from '../components/GenerateQRCode'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import withoutAuth from '../components/withoutAuth'
import { io } from 'socket.io-client'
import { BACKEND_URL } from '../config'
import { AuthContext, UserContext } from './_app'


const Home: NextPage = () => {
  const [socketId, setSocketId] = useState<string>(null);
  const { setUser } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isRectangle = useMediaQuery({ query: '(max-width: 1440px)' });
  const photo = useRef<HTMLImageElement>(null)

  isRectangle ? photo.current?.classList.add('left-12') : photo.current?.classList.remove('left-12')
  isRectangle ? photo.current?.classList.add('w-3/5') : photo.current?.classList.remove('w-3/5')

  useEffect(() => {
    const socket = io(BACKEND_URL + "/qr");
    socket.on('sID', ({ id }) => {
      setSocketId(id);
    })
    socket.on('qr-scanned', (data) => {
      console.log(data);
      
      localStorage.setItem('token', data.accessToken);
      setUser(data);
      setIsLoggedIn(true);
    })
    return () => {
      socket.disconnect();
    }
  }, [])

  return (
    <>
      <Head>
        <title>Login | Send Your Work</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex h-screen items-center justify-around relative">
        <img src="/images/Rectangle93.svg" className="absolute z-0 left-1/2 bottom-20" />
        <img src="/images/Rectangle 103.svg" className="absolute z-0  left-36 w-2/5" ref={photo} />
        <img src="/images/Rectangle94.svg" className="absolute z-0 right-52 w-20 top-20" />
        <img src="/images/Half-circle.svg" alt="" className="absolute right-0 bottom-0 w-2/12" />
        <Link href="/">
          <img src="/images/close.svg" className="cursor-pointer absolute right-10 top-10" />
        </Link>
        <LoginForm />
        {
          !isMobile &&
          <div className="flex flex-col h-5/12 w-auto bg-white items-center justify-between rounded-xl myShadow pb-2">
            <h1 className="text-4xl font-bold m-5">Sign in with QR</h1>
            <GenerateQRCode text={socketId} />
          </div>
        }
      </div>
    </>
  )
}

export default withoutAuth(Home);
