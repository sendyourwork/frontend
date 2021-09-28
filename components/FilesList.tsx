import { File } from "../interfaces/file";

interface IFilesList {
    files: File[]
}

export default function FilesList({files}: IFilesList): JSX.Element {
    return (
        <div>
            {files.map(({name, size, id}) => {
                return (
                    <div key={id}>
                        <p>{name}</p><span>{size}</span>
                    </div>
                )
            })}
        </div>
    )
}