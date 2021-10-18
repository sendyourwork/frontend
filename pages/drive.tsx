import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AddFile from "../components/AddFile";
import FilesToDownloadList from "../components/FilesToDownloadList";

const Drive: NextPage = () => {
    const [driveName, setDriveName] = useState('Math');
    const files = [
        {
            id: '34rdsads',
            name: 'something.mp4',
            size: '7 MB'
        },
        {
            id: '34sdsads',
            name: 'something.mp4',
            size: '7 MB'
        }
    ];
    return (
        <>
            <Head>
                <title>Public drive | Send Your Work</title>
            </Head>
            <div className="py-14 px-12 w-full xl:w-3/4">
                <h1 className="text-center xl:text-left text-5xl font-bold mb-8">Send<span className="text-main">Your</span>Work | {driveName}</h1>
                <div className="xl:grid grid-cols-2 gap-9">
                    <AddFile />
                </div>
                <FilesToDownloadList files={files} checkIsUserAdmin/>
            </div>
        </>
    )
}
export default Drive;