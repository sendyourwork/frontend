import { BACKEND_URL } from "../config";

export default function homeDriveFileDownload(filename: string, username: string) {
    return fetch(BACKEND_URL + "/userfiles/" + username + "/" + filename, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.blob())
    .then(blob => {
        const element = document.createElement('a');
        element.href = URL.createObjectURL(blob);
        element.setAttribute('download', filename);
        element.click();
    })
}