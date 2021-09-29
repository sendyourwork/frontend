import type { NextPage } from "next";
import Head from "next/head";
import AddFileForm from "../components/AddFileForm";
import FilesList from "../components/FilesList";
const Drive: NextPage = () => {
    const files = [
        {
            id:'34rdsads',
            name: 'something.mp4',
            size: '7 MB'
        },
        {
            id:'34sdsads',
            name: 'something.mp4',
            size: '7 MB'
        }
    ];
    return (
        <>
            <Head>
                <title>Public drive | Send Your Work</title>
            </Head>
            <div className="py-14 px-12 w-full md:w-3/4">
                <h1 className="text-5xl font-bold mb-8">Public Drive</h1>
                <div className="grid grid-cols-2 gap-9">
                    <AddFileForm />
                    <div></div>
                </div>
                <FilesList files={files}/>
            </div>
        </>
    )
}
export default Drive;