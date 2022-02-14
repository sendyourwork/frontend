import { BACKEND_URL } from "../../config";

export default function homeDriveUpload(files: FormData) {
    return fetch(BACKEND_URL + "/userfiles", {
        method:'POST',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: files
    })
    .then(response => response.json())
}