import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import UserContextProvider from "../contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" sizes="192x192" href="/images/logo.png" />
                <meta name="description" content="Send your work simply and safely." />
                <meta name="theme-color" content="#4158D0" />
                <meta property="og:title" content="Send Your Work" />
                <meta property="og:description" content="Send your work simply and safely." />
                <meta property="og:image" content="/images/ogImage.png" />
            </Head>
            <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider>
        </>
    );
}
export default MyApp;
