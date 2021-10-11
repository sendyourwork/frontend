import Navbar from '../components/landing/Navbar'
import Main from '../components/landing/Main'
import ProjectInfo from '../components/landing/ProjectInfo'
import Head from 'next/head'
const Page = ({isLoggedIn}: {isLoggedIn: boolean}) => {
    return (
        <>
            <Head>
                <title>sendYourwork</title>
            </Head>
            <Navbar isLoggedIn={isLoggedIn}/>
            <Main />
            <ProjectInfo />
        </>
    )
}
export default Page;