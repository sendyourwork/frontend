import Navbar from '../components/landing/Navbar'
import Main from '../components/landing/Main'
import ProjectInfo from '../components/landing/ProjectInfo'
import LoadingScreen from '../components/landing/LoadingScreen'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const Page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    })
    return (
        <>
            <Head>
                <title>sendYourwork</title>
            </Head>
            {loading ?
                <LoadingScreen />
                :
                <>
                    <Navbar />
                    <Main />
                    <ProjectInfo />
                </>

            }
        </>
    )
}
export default Page;