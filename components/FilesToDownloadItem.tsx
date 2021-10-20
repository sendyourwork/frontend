import { useContext, useState } from "react";
import formatFileSize from "../helpers/formatFileSize";
import { File } from "../interfaces/file";
import { UserContext } from "../pages/_app";
import publicFileRemove from "../utils/publicFileRemove";
import LoadingSpinner from "./LoadingSpinner";

interface FilesToDownloadProps {
    file: File, 
    checkIsUserAdmin: boolean,
    remove: (name: string) => void
}

export default function FilesToDownloadItem({file: {name, size, id}, checkIsUserAdmin, remove}: FilesToDownloadProps): JSX.Element {
    const { user: { role } } = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const formatedSize = formatFileSize(size);
    const removeFile = async () => {
        setError(null);
        setIsDeleting(true);
        const response = await publicFileRemove(name);
        if(response === "OK") {
            remove(name);
        }
        else {
            setError(response);
            setIsDeleting(false);
        }
    }
    return (
    <div className="relative p-5 myShadow rounded flex items-center">
        <div>
            <p>
                {name}
                <span className="text-gray-400 ml-2">{formatedSize}</span>
            </p>
            {(!checkIsUserAdmin || role === 'admin') && <button className="text-blue-600 hover:text-blue-500 hover:cursor-pointer mt-2" onClick={removeFile}>Delete a file</button>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
        <button className="ml-auto bg-gray-100 hover:bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#4158D0"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>
        </button>
        {isDeleting &&
            <div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                <LoadingSpinner />
            </div>
        }
    </div>
    )
}