import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AddFile from "../components/AddFile";
import FilesToDownloadList from "../components/FilesToDownloadList";
import { File } from "../interfaces/file";
import publicFileUpload from "../utils/publicFileUpload";

const Drive: NextPage = () => {
    const [driveName, setDriveName] = useState('Math');
    const [files, setFiles] = useState([]);

    const addFile = (newFiles: File[]) => {
        setFiles([...newFiles, ...files]);
    }
    const removeFile = (name: string) => {
        setFiles(files.filter((item) => item.name !== name));
    }

    return (
        <>
            <Head>
                <title>Public drive | Send Your Work</title>
            </Head>
            <div className="py-14 px-12 w-full xl:w-3/4">
                <h1 className="text-center xl:text-left text-5xl font-bold mb-8">Send<span className="text-main">Your</span>Work | {driveName}</h1>
                <div className="xl:grid grid-cols-2 gap-9">
                    <AddFile add={addFile} fetchFunction={publicFileUpload}/>
                </div>
                <FilesToDownloadList files={files} remove={removeFile} checkIsUserAdmin/>
            </div>
        </>
    )
}
export default Drive;