import { BACKEND_URL } from "../config";

export default function classDriveFileUpload(files: FormData, school_class: string, subject: string) {
    return fetch(`${BACKEND_URL}/files/${school_class}/${subject}`, {
        method:'POST',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: files
    })
    .then(response => response.json())
}