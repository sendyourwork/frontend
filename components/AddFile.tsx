import React, { useRef, useState } from "react";

type AddFileProps = {
    add?: (newFiles: File[]) => void
}
export default function AddFile({add}: AddFileProps): JSX.Element {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const [addFileViewVisible, setAddFileViewVisible] = useState(false);
    let enterTarget: EventTarget | null = null;

    const handleAddFileClick = () => {
        fileInputRef.current?.click();
    }
    const checkIsFilesSizeNotTooBig = (files: FileList): boolean => {
        let size = 0;
        const MB = 1024 * 1024;
        const maxSize = MB * 10;
        for(let i = 0; i < files.length; i++) {
            size += files[i].size;
        }
        if(size > maxSize) {
            setError("The file weight more than 10 MB");
            return false;
        }
        else {
            setError("");
            return true;
        }
    }
    const checkIsFolder = (files: FileList): Boolean => {
        for(let i = 0; i < files.length; i++) {
            if(!files[i].type)
            {
                setError("Your files have folder.")
                return true;
            }
        }
        return false;
    }
    const FileListToFile = (files: FileList): File[] => {
        const newFiles = [];
        for(let i = 0; i < files.length; i++){
            newFiles.push(files[i]);
        }
        return newFiles;
    }
    const checkAndSend = (files: FileList | null) => {
        if(files && files.length){
            if(checkIsFilesSizeNotTooBig(files)){
                if(!checkIsFolder(files)) {
                    const filesArray = FileListToFile(files);
                    if(add) {
                        add(filesArray); 
                    }
                    else {
                        console.log(filesArray);                
                        // const filesToSend = new FormData();
                        // for(let i = 0; files.length > i; i++){
                        //     filesToSend.append(String(i), files[i]);
                        // }
                        //we have file in binary code here, idk is this will work correctly
                        //send to backend
                    }
                }
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
            <button onClick={handleAddFileClick} className="text-blue-600 hover:cursor-pointer">Select a file</button>
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
        </div>
    )
}