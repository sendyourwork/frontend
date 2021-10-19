import React, { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark';
import LoadingSpinner from "./LoadingSpinner";

interface FilePreviewProps {
    file: File
}

export default function FilePreview({file}: FilePreviewProps) {
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState('');
    const imgSrc: string | undefined = file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined;
    const pdfSrc: string | undefined = file.type.startsWith("application/pdf") ? URL.createObjectURL(file) : undefined;
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const handleScroll = (event: React.SyntheticEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if(target.scrollHeight - target.offsetHeight < target.scrollTop + 80)
        {
            loadText();
        }
    }
    const loadText = () => {
        const CHUNK_SIZE = 1024 * 10;
        let shortFile;
        if(file.size < offset + CHUNK_SIZE) {
            shortFile = file.slice(offset, file.size);
        }
        else {
            shortFile = file.slice(offset, offset + CHUNK_SIZE);
        }
        const reader = new FileReader();
        reader.onload = e => {
            setText(text + e.target?.result);
            setOffset(offset + CHUNK_SIZE);
            setIsLoading(false);
        };
        reader.onerror = () => {
            setText("There was a problem with file processing. Please load file once again!");
            setIsLoading(false);
        }
        reader.readAsText(shortFile);
    }

    useEffect(() => {
        if(isPreviewVisible && !text && (file.type.startsWith('text/') || file.type.startsWith('application/json'))) {
            loadText();
        }
        else {
            setOffset(0);
            setText('');
            setIsLoading(false);
        }
    }, [isPreviewVisible])
    return (
        <>
        <button className="cursor-pointer" onClick={() => {
            setIsLoading(true);
            setIsPreviewVisible(true);
            document.body.style.overflow = "hidden";
        }}>
        {imgSrc ? 
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
        }
        </button>
        {isPreviewVisible && 
            <div className="fixed z-40 flex items-center justify-center w-screen h-screen left-0 top-0 bg-white md:p-16 bg-opacity-90 backdrop-brightness-75">
                <button 
                    className="bg-gray-400 text-3xl rounded-full w-10 h-10 absolute right-4 top-4 z-50"
                    onClick={() => {
                        setIsPreviewVisible(false);
                        document.body.style.overflow = "auto";
                    }}
                >
                    <span>x</span>
                </button>
                {imgSrc ?
                    <img src={imgSrc} className="max-h-full max-w-full"/>
                    :
                    pdfSrc ?
                        <iframe src={pdfSrc} className="w-full h-full"></iframe>
                        :
                        isLoading ?
                            <LoadingSpinner />
                            :
                            text ?
                                <div className="overflow-auto max-h-full" onScroll={handleScroll}>
                                    <SyntaxHighlighter showLineNumbers={true} style={style}>
                                        {text}
                                    </SyntaxHighlighter>
                                    {offset < file.size && 
                                    <div className="w-full mx-auto bg-highlight flex justify-center pb-4">
                                        <LoadingSpinner />
                                    </div>
                                    }
                                </div>
                                :
                                <p>{"Our preview doesn't support this file type"}</p>
                }
            </div>
        }
            </>
    )
}
