interface FilesToPreviewItemProps {
    file: File,
    remove: () => void
}

export default function FilesToPreviewItem({file: {name, size}, remove}: FilesToPreviewItemProps): JSX.Element {
    const sizeInMB = Math.round(size/(1024*1024));
    const sizeInKB = Math.round(size/1024);
    const formatedSize = sizeInMB ? sizeInMB + " MB" : sizeInKB + " KB";
    return (
    <div className="py-2 px-4 myShadow rounded flex items-center">
        <div>
            <p className="break-all">{name}</p>
            <p className="text-gray-400">{formatedSize}</p>
        </div>
        <button className="ml-auto bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer" onClick={() => remove()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </button>
    </div>
    )
}