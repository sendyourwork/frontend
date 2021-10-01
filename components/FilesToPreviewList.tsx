import FilesToPreviewItem from "./FilesToPreviewItem";

interface IFilesList {
    files: File[],
    remove: (id: number) => void
}

export default function FilesToPreviewList({files, remove}: IFilesList): JSX.Element {
    return (
        <div className="py-2 flex flex-col xl:grid grid-cols-2 gap-3">
            {files.map((file: File, index) => {
                return <FilesToPreviewItem file={file} remove={() => remove(index)} key={index}/>
            })}
        </div>
    )
}