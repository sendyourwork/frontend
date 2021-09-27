import type { NextPage } from "next";
import Head from "next/head";
import AddFileForm from "../components/AddFileForm";
const Drive: NextPage = () => {
    return (
        <>
            <Head>
                <title>Public drive</title>
            </Head>
            <div className="py-14 px-12">
                <h1 className="text-5xl font-bold">Public Drive</h1>
                <AddFileForm />
            </div>
        </>
    )
}
export default Drive;