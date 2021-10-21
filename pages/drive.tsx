import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AddFile from "../components/AddFile";
import FilesToDownloadList from "../components/FilesToDownloadList";
import { File } from "../interfaces/file";
import publicFileUpload from "../utils/publicFileUpload";
import Select from 'react-select'

const Drive: NextPage = () => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: '600',
            backgroundColor: state.isSelected ? '#5975ff' : 'white',
            color: state.isSelected ? 'white' : '#4158D0',
        }),
    }
    const options = [
        { value: 'Math', label: 'Math' },
        { value: 'Geography', label: 'Geography' },
        { value: 'Physics', label: 'Physics' },
        { value: 'PE', label: 'PE' },
        { value: 'Computer Science', label: 'Computer Science' },
    ]
    const [driveName, setDriveName] = useState(options[0].label);
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
            <div className="py-14 px-12 w-full xl:w-3/4 ">
                <h3 className="text-center xl:text-left text-5xl font-bold mb-8">Send<span className="text-main">Your</span>Work | {driveName}</h3>
                <div className="w-1/3 py-10">
                    <h1 className="my-5 text-4xl font-bold pb-3">Drives:<span className="text-main"></span></h1>
                    <Select
                        placeholder='Choose subject:'
                        options={options}
                        onChange={(e) => setDriveName(e.value)}
                        styles={customStyles}
                    />
                </div>
                <div className="xl:grid grid-cols-2 gap-9">
                    <AddFile add={addFile} fetchFunction={publicFileUpload} />
                </div>
                <FilesToDownloadList files={files} remove={removeFile} checkIsUserAdmin />
            </div>
        </>
    )
}
export default Drive;