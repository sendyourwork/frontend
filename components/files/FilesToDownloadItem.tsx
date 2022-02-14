import { useContext, useState } from "react";
import formatFileSize from "../../helpers/formatFileSize";
import { File } from "../../interfaces/file";
import homeDriveFileDownload from "../../utils/files/homeDriveFileDownload";
import classDriveFileDownload from "../../utils/files/classDriveFileDownload";
import LoadingSpinner from "../shared/LoadingSpinner";
import classDriveFilePreview from "../../utils/files/classDriveFilePreview";
import homeDriveFilePreview from "../../utils/files/homeDriveFilePreview";
import { useUser } from "../../contexts/UserContext";

interface FilesToDownloadProps {
    file: File;
    checkIsUserAdmin: boolean;
    subject: string;
    remove: (name: string) => void;
    removeFetchFunction: (name: string) => Promise<any>;
}

export default function FilesToDownloadItem({
    file: { name, size },
    checkIsUserAdmin,
    subject,
    remove,
    removeFetchFunction,
}: FilesToDownloadProps): JSX.Element {
    const {
        user: { role, username, school_class },
    } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const formatedSize = formatFileSize(size);
    const removeFile = async () => {
        setError(null);
        setIsLoading(true);
        if (removeFetchFunction) {
            const response = await removeFetchFunction(name);
            if (response === "OK") {
                remove(name);
            } else {
                setError(response);
            }
            setIsLoading(false);
        }
    };
    const downloadFile = async () => {
        if (window.location.href.match("/home")) {
            await homeDriveFileDownload(name, username);
        } else {
            await classDriveFileDownload(name, school_class, subject);
        }
    };

    const previewFile = async () => {
        if (window.location.href.match("/home")) {
            homeDriveFilePreview(name, username);
        } else {
            classDriveFilePreview(name, school_class, subject);
        }
    };

    return (
        <div className="relative p-3 lg:p-5 myShadow rounded flex gap-4 items-center">
            <button onClick={previewFile}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 0 24 24"
                    width="28px"
                    fill="#2563eb"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                </svg>
            </button>
            <div>
                <p className="break-all">
                    <span>{name}</span>
                    <span className="text-gray-400 ml-2">{formatedSize}</span>
                </p>
                {(!checkIsUserAdmin || role === "admin") && (
                    <button
                        className="text-blue-600 hover:text-blue-500 hover:cursor-pointer mt-2"
                        onClick={removeFile}
                    >
                        Delete a file
                    </button>
                )}
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
                className="ml-auto bg-gray-100 hover:bg-gray-200 p-4 rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={downloadFile}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#4158D0"
                >
                    <g>
                        <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                        <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
                    </g>
                </svg>
            </button>
            {isLoading && (
                <div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}
        </div>
    );
}
