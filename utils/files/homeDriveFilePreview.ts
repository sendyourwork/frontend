import { BACKEND_URL } from "../../config";

export default async function homeDriveFilePreview(filename: string, username: string) {
    fetch(BACKEND_URL + "/userfiles/" + username + "/" + filename, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.blob())
    .then(blob => {
        window.open(URL.createObjectURL(blob))
    })
}