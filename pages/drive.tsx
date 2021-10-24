import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AddFile from "../components/AddFile";
import FilesToDownloadList from "../components/FilesToDownloadList";
import { File } from "../interfaces/file";
import publicFileUpload from "../utils/classDriveFileUpload";
import Select from 'react-select'
import { UserContext } from "./_app";
import getSubjects from "../utils/getSubjects";
import classDriveGetFiles from "../utils/classDriveGetFiles";
import withAuth from "../components/withAuth";
import classDriveFileRemove from "../utils/classDriveFileRemove";

const Drive: NextPage = () => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: '600',
            backgroundColor: state.isSelected ? '#5975ff' : 'white',
            color: state.isSelected ? 'white' : '#4158D0',
        }),
    }
    const [options, setOptions] = useState([]);

    const [driveName, setDriveName] = useState(null);
    const [files, setFiles] = useState([]);
    const {user: { school_class }} = useContext(UserContext);

    const addFile = (newFiles: File[]) => {
        setFiles([...newFiles, ...files]);
    }
    const removeFile = (name: string) => {
        setFiles(files.filter((item) => item.name !== name));
    }

    useEffect(() => {
        (async () => {
            const subjects = await getSubjects(school_class);
            setOptions(subjects.map((item: string) => ({
                value: item,
                label: item
            })));
            setDriveName(subjects[0] || null)
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(driveName) {
            (async () => {
                const subjectFiles = await classDriveGetFiles(school_class, driveName);
                if(subjectFiles.length && subjectFiles.length > 0 && typeof subjectFiles !== "string") {
                    setFiles(subjectFiles);
                }
                else {
                    setFiles([]);
                }
            })()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [driveName])

    return (
        <>
            <Head>
                <title>Public drive | Send Your Work</title>
            </Head>
            <div className="py-14 px-12 w-full xl:w-3/4 ">
                <h3 className="text-center xl:text-left text-5xl font-bold mb-8">Send<span className="text-main">Your</span>Work | {driveName}</h3>
                <div className="w-1/3 py-10">
                    <h1 className="my-5 text-4xl font-bold pb-3">Drives:<span className="text-main"></span></h1>
                    <Select
                        options={options}
                        onChange={(e) => setDriveName(e.value)}
                        placeholder={driveName}
                        styles={customStyles}
                    />
                </div>
                <div className="xl:grid grid-cols-2 gap-9">
                    <AddFile add={addFile} fetchFunction={(files: FormData) => publicFileUpload(files, school_class, driveName)} />
                </div>
                <FilesToDownloadList files={files} remove={removeFile} removeFetchFunction={(name) => classDriveFileRemove(name, school_class, driveName)} subject={driveName} checkIsUserAdmin />
            </div>
        </>
    )
}
export default withAuth(Drive);