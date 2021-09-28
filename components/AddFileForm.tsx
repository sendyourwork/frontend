import React, { useState } from "react";

export default function AddFileForm(): JSX.Element {
    const [error, setError] = useState('');
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
    const checkAndSend = (files: FileList | null) => {
        if(files && files.length){
            if(checkIsFilesSizeNotTooBig(files)){
                //send to backend
                console.log(files);
            }
        }
    }
    const preventDefaultDragEvent = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefaultDragEvent(event);
        const files = event.dataTransfer.files;
        checkAndSend(files);
    }
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        checkAndSend(files);
    }
    return (
        <div
            onDrop={handleDrop}
            onDragEnter={preventDefaultDragEvent}
            onDragOver={preventDefaultDragEvent}
            className="p-5 myShadow rounded"
        >
            <input type="file" id="files" className="w-0" onChange={handleChangeFile} multiple/>
            <label htmlFor="files" className="text-blue-600 hover:cursor-pointer">Select a file </label>
            <span>or drag in form</span>
            {error ? 
            <p className="text-red-500 text-sm">{error}</p>
                :
            <p className="text-gray-400 text-sm">PNG, jpg, gif files up to 10 MB in size are available for download</p>
            }
        </div>
    )
}