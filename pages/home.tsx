import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import AddFile from "../components/files/AddFile";
import Chat from "../components/chat/Chat";
import FilesToDownloadList from "../components/files/FilesToDownloadList";
import SendEmailForm from "../components/email/SendEmailForm";
import UserInfo from "../components/user/UserInfo";
import withAuth from "../components/auth/withAuth";
import { File as FileI } from "../interfaces/file";
import homeDriveFileRemove from "../utils/homeDriveFileRemove";
import homeDriveUpload from "../utils/homeDriveFileUpload";
import homeDriveGetFiles from "../utils/homeDriveGetFiles";
import SearchInput from "../components/shared/SearchInput";
import { useUser } from "../contexts/UserContext";

const Home: NextPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const [allFiles, setAllFiles] = useState<FileI[]>([]);
    const [filteredFiles, setFilteredFiles] = useState([]);
    const {
        user: { username },
    } = useUser();

    const addFile = (newFiles: FileI[]) => {
        setAllFiles([...newFiles, ...allFiles]);
    };

    const removeFile = (name: string) => {
        setAllFiles(allFiles.filter((item) => item.name !== name));
    };

    useEffect(() => {
        (async () => {
            const data = await homeDriveGetFiles(username);
            setAllFiles(data);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setFilteredFiles(allFiles.filter((item) => item.name.match(searchValue)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, allFiles]);
    return (
        <>
            <Head>
                <title>Home | Send your work</title>
            </Head>
            <div className="p-3 py-6 md:py-14 md:px-9 w-full flex flex-col xl:flex-row max-h-screen">
                <div className="order-2 w-full xl:w-4/5 xl:order-none">
                    <div className="flex flex-col px-3 gap-9 xl:flex-row">
                        <SearchInput value={searchValue} onChange={setSearchValue} />
                        <div className="xl:w-1/2">
                            <AddFile add={addFile} fetchFunction={homeDriveUpload} />
                        </div>
                    </div>
                    <div className="mt-16 mb-8 max-h-96 overflow-y-scroll px-3">
                        <FilesToDownloadList
                            files={filteredFiles}
                            remove={removeFile}
                            removeFetchFunction={(name) => homeDriveFileRemove(name, username)}
                        />
                    </div>
                    <div className="pl-3 w-full xl:w-5/12">
                        <SendEmailForm />
                    </div>
                </div>
                <div className="xl:p-7 xl:fixed right-0 top-0 flex flex-col xl:w-1/5 order-1 mb-5 mr-2 xl:mb-0 xl:order-none gap-8 xl:min-h-full justify-between">
                    <UserInfo name={username} />
                    <Chat />
                </div>
            </div>
        </>
    );
};
export default withAuth(Home);
