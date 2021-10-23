import { File } from "../interfaces/file";
import FilesItem from "./FilesToDownloadItem";

interface IFilesList {
    files: File[],
    checkIsUserAdmin?: boolean,
    subject?: string
    remove: (name: string) => void,
    removeFetchFunction: (name: string) => Promise<any>
}

export default function FilesToDownloadList({ files, subject, checkIsUserAdmin = false, remove, removeFetchFunction }: IFilesList): JSX.Element {
    return (
        <div className="py-16 flex flex-col xl:grid grid-cols-2 gap-9">
            {files.map((file: File, index) => {
                return <FilesItem file={file} subject={subject} key={index} checkIsUserAdmin={checkIsUserAdmin} remove={remove} removeFetchFunction={removeFetchFunction} />
            })}
        </div>
    )
}