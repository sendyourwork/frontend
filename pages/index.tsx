import type { NextPage } from 'next'
import Head from 'next/head'
import GenerateQRCode from '../components/GenerateQRCode'
import LoginForm from '../components/LoginForm'

const Home: NextPage = () => {
  const sessionId = "dadkjmnamkadkmk1123"
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="grid grid-cols-2">
        <div className="w-full h-screen bg-gradient-to-br from-yellow-200 via-pink-500 to-blue-700 flex justify-center items-center">
          <div className="w-max flex flex-col items-center gap-16">
            <p className="text-3xl text-white w-max">Login normally...</p>
            <LoginForm />
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-max flex flex-col items-center gap-16">
            <p className="text-3xl w-max">...or with QR code</p>
            <GenerateQRCode text={sessionId}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
