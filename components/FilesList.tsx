import { File } from "../interfaces/file";

interface IFilesList {
    files: File[]
}

export default function FilesList({files}: IFilesList): JSX.Element {
    return (
        <div className="w-full md:w-3/4 py-16 grid grid-cols-2 gap-9">
            {files.map(({name, size, id}: File) => {
                return (
                    <div key={id} className="p-5 myShadow rounded flex">
                        <div>
                            <p>
                                {name}
                                <span className="text-gray-400 ml-2">{size}</span>
                            </p>
                            <button className="text-blue-600 hover:cursor-pointer mt-2">Delete a file</button>
                        </div>
                        <button className="ml-auto bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#4158D0"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}