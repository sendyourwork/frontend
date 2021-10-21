import { File } from "../interfaces/file";
import FilesItem from "./FilesToDownloadItem";

interface IFilesList {
    files: File[],
    checkIsUserAdmin?: boolean,
    remove: (name: string) => void,
    removeFetchFunction?: (name: string, username: string) => Promise<any>
}

export default function FilesToDownloadList({ files, checkIsUserAdmin = false, remove, removeFetchFunction }: IFilesList): JSX.Element {
    return (
        <div className="py-16 flex flex-col xl:grid grid-cols-2 gap-9">
            {files.map((file: File, index) => {
                return <FilesItem file={file} key={index} checkIsUserAdmin={checkIsUserAdmin} remove={remove} removeFetchFunction={removeFetchFunction} />
            })}
        </div>
    )
}