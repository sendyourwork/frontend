import React, { useRef, useState } from "react";
import { checkIsFilesSizeNotTooBig } from '../helpers/checkIsFileSizeNotTooBig';
import { File as FileI } from '../interfaces/file';
import LoadingSpinner from "./LoadingSpinner";
type AddFileProps = {
    add: (newFiles: FileI[] | File[]) => void,
    fetchFunction?: (files: FormData) => Promise<any>
}
export default function AddFile({add, fetchFunction}: AddFileProps): JSX.Element {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [addFileViewVisible, setAddFileViewVisible] = useState(false);
    let enterTarget: EventTarget | null = null;

    const handleAddFileClick = () => {
        fileInputRef.current?.click();
    }
    const checkIsFolder = (files: FileList): Boolean => {
        for(let i = 0; i < files.length; i++) {
            if(!files[i].name.includes('.'))
            {
                return true;
            }
        }
        return false;
    }
    const checkAndSend = async (files: FileList | null) => {
        if(files && files.length){
            if(checkIsFilesSizeNotTooBig(files)){
                setError("");
                if(!checkIsFolder(files)) {  
                    if(fetchFunction) {  
                        setIsUploading(true);         
                        const filesToSend = new FormData();
                        for(let i = 0; files.length > i; i++){
                            filesToSend.append("files", files[i]);
                        }
                        const response = await fetchFunction(filesToSend);
                        if(response?.status) {
                            add(response.data);
                            setIsUploading(false);
                        }
                        else {
                            setError(response.message || "Something went wrong!");
                            setIsUploading(false);
                        }
                    }
                    else {
                        const filesToAdd = [];
                        for(let i = 0; files.length > i; i++){
                            filesToAdd.push(files[i]);
                        }
                        add(filesToAdd);
                    }
                }
                else {
                    setError("Your files have folder!");
                }
            }
            else {
                setError("Your file weight more than 10 MB");
            }
        }
    }

    const preventDefaultDragEvent = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefaultDragEvent(event);
        enterTarget = event.target;
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefaultDragEvent(event);
        setAddFileViewVisible(true);   
    }

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        if(enterTarget == event.target)
        {
            preventDefaultDragEvent(event);
            setAddFileViewVisible(false);
        }  
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefaultDragEvent(event);
        const files = event.dataTransfer.files;
        checkAndSend(files);
        setAddFileViewVisible(false);  
    }

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        checkAndSend(files);
    }


    return (
        <div
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="p-5 myShadow rounded relative"
        >
            <input type="file" ref={fileInputRef} className="w-0" onChange={handleChangeFile} multiple/>
            <button onClick={handleAddFileClick} className="text-blue-600 hover:text-blue-500 hover:cursor-pointer">Select a file</button>
            <span> or drag in form</span>
            {error ? 
                <p className="text-red-500 text-sm">{error}</p>
                :
                <p className="text-gray-400 text-sm">PNG, jpg, gif files up to 10 MB in size are available for download</p>
            }
            {addFileViewVisible &&
            <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 bg-white border-2 border-black border-dashed rounded">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </div>
            }
            {isUploading &&
                <div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            }
        </div>
    )
}