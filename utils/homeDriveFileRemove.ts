import { BACKEND_URL } from "../config";

export default function homeDriveFileRemove(name: string, username: string) {
    return fetch(BACKEND_URL + "/userfiles/" + username + "/" + name, {
        method:'DELETE',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token'),
        },
    })
    .then(response => response.text())
}