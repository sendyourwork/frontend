import Fade from "react-reveal/Fade";
import React, { useContext, useEffect, useState } from "react"
import { checkIsFilesSizeNotTooBig } from "../helpers/checkIsFileSizeNotTooBig";
import { UserContext } from "../pages/_app";
import sendEmailToTeacher from "../utils/sendEmailToTeacher";
import AddFile from "./AddFile";
import FilesToPreviewList from "./FilesToPreviewList";
import LoadingSpinner from "./LoadingSpinner";
import Select from 'react-select'
import getSubjects from "../utils/getSubjects";

export default function SendEmailForm(): JSX.Element {
    const [title, setTitle] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [subject, setSubject] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const [sentSuccessFully, setIsSentSuccessFully] = useState(false);
    const [options, setOptions] = useState([]);
    const { user: { username, school_class } } = useContext(UserContext);
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: '600',
            backgroundColor: state.isSelected ? '#5975ff' : 'white',
            color: state.isSelected ? 'white' : '#4158D0',
        }),
    }
    const removeFile = (index: number) => {
        setFiles(files.filter((_, fileIndex) => fileIndex !== index));
    }
    const checkIsFilesNotTooBig = () => {
        if (!checkIsFilesSizeNotTooBig(files) && files.length > 0) {
            setError("Your files weights more than 10 MB!");
        }
        else {
            setError(null);
        }
    }
    const handleSubmit = async () => {
        if (title && subject && files.length > 0) {
            setIsSending(true);
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = async () => {
                const response = await sendEmailToTeacher({
                    username,
                    school_class,
                    topic: title,
                    subject_name: subject,
                    filename: files[0].name,
                    filecontent: reader.result.toString().replace(/^data:(.*,)?/, '')
                });
                if (response === "OK") {
                    setIsSentSuccessFully(true);
                    setTimeout(() => {
                        setIsSentSuccessFully(false);
                    }, 5000);
                    setFiles([]);
                    setTitle('');
                    setError(null);
                    setIsSending(false);
                }
                else {
                    setError(response);
                    setIsSending(false);
                }
            }
        }
        else {
            setError("Title, subject and file are required!");
        }
    }
    const addFiles = (newFiles: File[]) => {
        setFiles([...files, ...newFiles]);
    }

    useEffect(() => {
        checkIsFilesNotTooBig();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files])

    useEffect(() => {
        (async () => {
            const data = await getSubjects(school_class);
            const dataToOptions = data.map((item: string) => {
                return {option: item, label: item}
            })        
            setOptions(dataToOptions);
        })()
    }, [])

    return (
        <div className="relative flex flex-col gap-5">
            <Select
                placeholder='Pick subject:'
                options={options}
                styles={customStyles}
                onChange={(item) => setSubject(item.option)}
            />
            <div className="w-full h-16 px-5 myShadow flex flex-col justify-center rounded">
                {title && <p className="text-sm text-gray-400 z-10">Title</p>}
                <input
                    type="text"
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    placeholder="Title"
                    className="outline-none h-8 z-0"
                />
            </div>
            <AddFile add={addFiles} />
            {files.length > 0 && <FilesToPreviewList remove={removeFile} files={files} />}
            {error && <p className="text-red-600 text-center">{error}</p>}
            <button onClick={handleSubmit} className="w-28 xl:ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-3xl flex px-5 py-3 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" /></svg>
                <span>Send</span>
            </button>
            {isSending &&
                <div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            }
            {sentSuccessFully &&
                <div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                    <Fade>
                        <p className="text-xl">Your work has been sent</p>
                    </Fade>
                </div>
            }
        </div>
    )
}