import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AddFile from "../components/files/AddFile";
import FilesToDownloadList from "../components/files/FilesToDownloadList";
import { File } from "../interfaces/file";
import publicFileUpload from "../utils/files/classDriveFileUpload";
import Select from "react-select";
import getSubjects from "../utils/subjects/getSubjects";
import classDriveGetFiles from "../utils/files/classDriveGetFiles";
import withAuth from "../components/auth/withAuth";
import classDriveFileRemove from "../utils/files/classDriveFileRemove";
import { useMediaQuery } from "react-responsive";
import { useUser } from "../contexts/UserContext";

const Drive: NextPage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: "600",
            backgroundColor: state.isSelected ? "#5975ff" : "white",
            color: state.isSelected ? "white" : "#4158D0",
        }),
    };
    const [options, setOptions] = useState([]);

    const [driveName, setDriveName] = useState(null);
    const [files, setFiles] = useState([]);
    const {
        user: { school_class },
    } = useUser();

    const addFile = (newFiles: File[]) => {
        setFiles([...newFiles, ...files]);
    };
    const removeFile = (name: string) => {
        setFiles(files.filter((item) => item.name !== name));
    };

    useEffect(() => {
        (async () => {
            const subjects = await getSubjects(school_class);
            setOptions(
                subjects.map((item: string) => ({
                    value: item,
                    label: item,
                }))
            );
            setDriveName(subjects[0] || null);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (driveName) {
            (async () => {
                const subjectFiles = await classDriveGetFiles(school_class, driveName);
                if (
                    subjectFiles.length &&
                    subjectFiles.length > 0 &&
                    typeof subjectFiles !== "string"
                ) {
                    setFiles(subjectFiles);
                } else {
                    setFiles([]);
                }
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [driveName]);

    return (
        <div className="flex">
            <Head>
                <title>Class drive | Send Your Work</title>
            </Head>
            <div className="p-6 px-5 xl:py-14 xl:px-12 w-full xl:w-3/4 ">
                {isMobile && (
                    <div className="xl:p-6 xl:pr-8 ml-auto w-max">
                        <div className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer">
                            <Link href="/home">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#ffffff"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )}
                <h3 className="text-center xl:text-left text-5xl font-bold mt-6">
                    Send<span className="text-main">Your</span>Work | {driveName}
                </h3>
                <div className="xl:w-1/3 py-4">
                    <h1 className="my-5 text-4xl font-bold pb-3">
                        Drives:<span className="text-main"></span>
                    </h1>
                    <Select
                        options={options}
                        onChange={(e) => setDriveName(e.value)}
                        styles={customStyles}
                        value={options.filter((option) => option.label === driveName)}
                        isSearchable={false}
                    />
                </div>
                <div className="xl:grid grid-cols-2 gap-9 xl:pt-2 xl:pb-6">
                    <AddFile
                        add={addFile}
                        fetchFunction={(files: FormData) =>
                            publicFileUpload(files, school_class, driveName)
                        }
                    />
                </div>
                <div>
                    <FilesToDownloadList
                        files={files}
                        remove={removeFile}
                        removeFetchFunction={(name) =>
                            classDriveFileRemove(name, school_class, driveName)
                        }
                        subject={driveName}
                        checkIsUserAdmin
                    />
                </div>
            </div>
            {!isMobile && (
                <div className="xl:p-7 xl:pr-9 ml-auto w-max">
                    <div className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer">
                        <Link href="/home">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#ffffff"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
export default withAuth(Drive);
