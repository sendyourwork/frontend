import type { NextPage } from "next";
import Navbar from '../components/landing/Navbar'
import Main from '../components/landing/Main'
import Head from 'next/head'
const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>sendYourwork</title>
            </Head>
            <Navbar />
            <Main />
        </>
    )
}
export default Page;