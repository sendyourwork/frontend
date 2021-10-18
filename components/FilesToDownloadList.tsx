import { File } from "../interfaces/file";
import FilesItem from "./FilesToDownloadItem";

interface IFilesList {
    files: File[],
    checkIsUserAdmin?: boolean
}

export default function FilesToDownloadList({files, checkIsUserAdmin = false}: IFilesList): JSX.Element {
    return (
        <div className="py-16 flex flex-col xl:grid grid-cols-2 gap-9">
            {files.map((file: File) => {
                return <FilesItem file={file} key={file.id} checkIsUserAdmin={checkIsUserAdmin}/>
            })}
        </div>
    )
}