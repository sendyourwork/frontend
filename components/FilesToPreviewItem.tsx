import { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark';

interface FilesToPreviewItemProps {
    file: File,
    remove: () => void
}
export default function FilesToPreviewItem({file, remove}: FilesToPreviewItemProps): JSX.Element {
    const [text, setText] = useState<string | ArrayBuffer | null | undefined>('');
    const imgSrc: string | undefined = file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined;
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const sizeInMB = Math.round(file.size/(1024*1024));
    const sizeInKB = Math.round(file.size/1024);
    const formatedSize = sizeInMB ? sizeInMB + " MB" : sizeInKB + " KB";
    useEffect(() => {
        if(isPreviewVisible && file.type.startsWith('text/')) {
            const reader = new FileReader();
            reader.onload = e => {
                setText(e.target?.result);
            };
            reader.readAsText(file);
        }
    }, [isPreviewVisible])

    return (
    <div className="py-2 pl-2 pr-4 myShadow rounded flex items-center gap-2">
        <button className="cursor-pointer" onClick={() => {
            setIsPreviewVisible(true);
            document.body.style.overflow = "hidden";
        }}>
        {imgSrc ? 
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
        }
        </button>
        <div>
            <p className="break-all">{file.name}</p>
            <p className="text-gray-400">{formatedSize}</p>
        </div>
        <button className="ml-auto bg-gray-100 p-2 rounded-full flex items-center justify-center hover:cursor-pointer" onClick={() => remove()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </button>
        {isPreviewVisible && 
        <div className="fixed z-50 flex items-center justify-center w-screen h-screen left-0 top-0 bg-white p-16 bg-opacity-90 backdrop-brightness-75">
            <button 
                className="bg-gray-400 text-3xl rounded-full w-10 h-10 absolute right-4 top-4"
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
            file.type.startsWith("text/") ?
                <div className="overflow-auto max-h-full">
                    <SyntaxHighlighter showLineNumbers={true} style={style}>
                        {text}
                    </SyntaxHighlighter>
                </div>
                :
                <p>{"Our preview doesn't support this file type"}</p>
            }
        </div>
        }
    </div>
    )
}