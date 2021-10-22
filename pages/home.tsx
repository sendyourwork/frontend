import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import AddFile from "../components/AddFile";
import Chat from "../components/Chat";
import FilesToDownloadList from "../components/FilesToDownloadList";
import SendEmailForm from "../components/SendEmailForm";
import UserInfo from "../components/UserInfo";
import withAuth from "../components/withAuth";
import { File as FileI } from "../interfaces/file";
import homeDriveFileRemove from "../utils/homeDriveFileRemove";
import homeDriveUpload from "../utils/homeDriveFileUpload";
import homeDriveGetFiles from "../utils/homeDriveGetFiles";
import { UserContext } from "./_app";

const Home: NextPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [files, setFiles] = useState<FileI[]>([]);
    const addFile = (newFiles: FileI[]) => {
        setFiles([...newFiles, ...files]);
    }

    const removeFile = (name: string) => {
        setFiles(files.filter((item) => item.name !== name));
    }

    const { user: { username } } = useContext(UserContext);

    useEffect(() => {
        (async() => {
            const data = await homeDriveGetFiles(username);
            setFiles(data);
        })()
    }, [])
    return (
        <>
            <Head>
                <title>Home | Send your work</title>
            </Head>
            <div className="p-7 md:py-14 md:px-12 w-full flex flex-col xl:flex-row min-h-screen">
                <div className="order-2 w-full xl:w-4/5 xl:order-none">
                    <div className="flex flex-col xl:grid grid-cols-2 gap-9">
                        <div className="myShadow w-full p-5 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1111117A"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            <input type="text"
                                value={searchValue}
                                className="outline-none ml-2 w-full"
                                placeholder="Search"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                            />
                        </div>
                        <AddFile add={addFile} fetchFunction={homeDriveUpload} />
                    </div>
                    <FilesToDownloadList files={files} remove={removeFile} removeFetchFunction={homeDriveFileRemove} />
                    <div className="w-full xl:w-5/12">
                        <SendEmailForm />
                    </div>
                </div>
                <div className="flex flex-col xl:w-1/5 order-1 mb-5 xl:mb-0 xl:order-none gap-8 xl:min-h-full justify-between">
                    <UserInfo name={username} />
                    <Chat />
                </div>
            </div>
        </>
    )
}
export default withAuth(Home);