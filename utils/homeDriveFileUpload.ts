import { BACKEND_URL } from "../config";

export default function homeDriveUpload(files: FormData) {
    return fetch(BACKEND_URL + "/upload", {
        method:'POST',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: files
    })
    .then(response => response.json())
}