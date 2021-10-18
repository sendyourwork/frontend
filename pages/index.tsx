import Navbar from '../components/landing/Navbar'
import Main from '../components/landing/Main'
import ProjectInfo from '../components/landing/ProjectInfo'
import LoadingScreen from '../components/landing/LoadingScreen'
import MainInfoPhone from '../components/landing/MainInfoPhone'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const Page = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    })
    return (
        <>
            <Head>
                <title>SendYourWork</title>
            </Head>
            {loading ?
                <LoadingScreen />
                :
                !isPhone ?
                    <>
                        <Navbar />
                        <Main linkProps="/login" />
                        <ProjectInfo />
                    </>
                    :
                    <>
                        <Navbar />
                        <Main linkProps="/" />
                        <MainInfoPhone />
                    </>
            }
        </>
    )
}
export default Page;