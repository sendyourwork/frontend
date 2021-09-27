import React, { useEffect, useState } from "react";

export default function AddFileForm(): JSX.Element {
    const [files, setFiles] = useState<File[]>([]);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }
    const handleChangeFile = ({
        currentTarget: {files},
    }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setFiles(existing => [...existing, files[0]]);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" id="files" className="w-0" onChange={handleChangeFile} />
            <label htmlFor="files" className="text-blue-600">Select a file </label>
            <span>or drag in form</span>
            <p className="text-gray-400 text-sm">PNG, jpg, gif files up to 10 MB in size are available for download</p>
        </form>
    )
}