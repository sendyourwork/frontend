import { BACKEND_URL } from "../config";

export default function publicFileUpload(files: FormData) {
    return fetch(BACKEND_URL + "/public-upload", {
        method:'POST',
        body: files
    })
    .then(response => response.json())
}