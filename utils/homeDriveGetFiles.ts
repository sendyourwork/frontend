import { BACKEND_URL } from "../config";

export default function homeDriveGetFiles(username: string) {
    return fetch(BACKEND_URL + "/userfiles/" + username, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}