import type { NextPage } from "next";
import Navbar from '../components/landing/Navbar'
import Main from '../components/landing/Main'
import ProjectInfo from '../components/landing/ProjectInfo'
import Head from 'next/head'
const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>sendYourwork</title>
            </Head>
            <Navbar />
            <Main />
            <ProjectInfo />
        </>
    )
}
export default Page;