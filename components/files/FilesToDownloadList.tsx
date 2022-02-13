import { File } from "../../interfaces/file";
import FilesItem from "./FilesToDownloadItem";

interface IFilesList {
    files: File[];
    checkIsUserAdmin?: boolean;
    subject?: string;
    remove: (name: string) => void;
    removeFetchFunction: (name: string) => Promise<any>;
}

export default function FilesToDownloadList({
    files,
    subject,
    checkIsUserAdmin = false,
    remove,
    removeFetchFunction,
}: IFilesList): JSX.Element {
    return (
        <div className="flex flex-col xl:grid grid-cols-2 gap-3 lg:gap-9 py-3">
            {files.map((file: File, index) => {
                return (
                    <FilesItem
                        file={file}
                        subject={subject}
                        key={index}
                        checkIsUserAdmin={checkIsUserAdmin}
                        remove={remove}
                        removeFetchFunction={removeFetchFunction}
                    />
                );
            })}
        </div>
    );
}
