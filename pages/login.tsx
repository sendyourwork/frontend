import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import GenerateQRCode from '../components/GenerateQRCode'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Timer from '../components/Timer'
import LoadingSpinner from '../components/LoadingSpinner'


const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId, setSessionId] = useState<string>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isRectangle = useMediaQuery({ query: '(max-width: 1440px)' });
  const photo = useRef<HTMLImageElement>(null)

  isRectangle ? photo.current?.classList.add('left-12') : photo.current?.classList.remove('left-12')
  isRectangle ? photo.current?.classList.add('w-3/5') : photo.current?.classList.remove('w-3/5')

  const getNewSessionId = () => {
    setIsLoading(true);
    //get new session from backend
    let text = "";
    for (let i = 0; i < 10; i++) {
      text += String(Math.floor(Math.random() * i));
    }
    setSessionId(text);
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }

  useEffect(() => {
    if (sessionId === null) {
      getNewSessionId();
    }
  }, [sessionId])

  return (
    <>
      <Head>
        <title>Login | Send Your Work</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex h-screen items-center justify-around relative">
        <img src="/Rectangle93.svg" className="absolute z-0 left-1/2 bottom-20" />
        <img src="/Rectangle 103.svg" className="absolute z-0  left-36 w-2/5" ref={photo} />
        <img src="/Rectangle94.svg" className="absolute z-0 right-52 w-20 top-20" />
        <img src="/Half-circle.svg" alt="" className="absolute right-0 bottom-0 w-2/12" />
        <Link href="/">
          <img src="/close.svg" className="cursor-pointer absolute right-10 top-10" />
        </Link>
        <LoginForm />
        {
          !isMobile &&
          (isLoading ?
            <LoadingSpinner />
            :
            <div className="flex flex-col w-auto bg-white items-center justify-between rounded-xl myShadow pb-2">
              <h1 className="text-4xl font-bold m-5">Sign in with QR</h1>
              <GenerateQRCode text={sessionId} />
              <p>QR code expires in <Timer time={5 * 60} taskAfter={() => setSessionId(null)} /></p>
            </div>)
        }
      </div>
    </>
  )
}

export default Home
