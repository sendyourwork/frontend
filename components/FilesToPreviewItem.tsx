import { useEffect, useState } from "react";

interface FilesToPreviewItemProps {
    file: File,
    remove: () => void
}
export default function FilesToPreviewItem({file, remove}: FilesToPreviewItemProps): JSX.Element {
    const [imgSrc, setImgSrc] = useState<undefined | string>(undefined);
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const sizeInMB = Math.round(file.size/(1024*1024));
    const sizeInKB = Math.round(file.size/1024);
    const formatedSize = sizeInMB ? sizeInMB + " MB" : sizeInKB + " KB";

    useEffect(() => {
        if(file.type.startsWith("image/"))
        {
            setImgSrc(URL.createObjectURL(file));
        }
    }, [])
    return (
    <div className="py-2 pl-2 pr-4 myShadow rounded flex items-center gap-2">
        {imgSrc ? 
        <button className="cursor-pointer" onClick={() => {
            setIsPreviewVisible(true);
            document.body.style.overflow = "hidden";
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
        :
        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#2563eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
        }
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
                x
            </button>
            <img src={imgSrc} className="max-h-full max-w-full"/>
        </div>
        }
    </div>
    )
}