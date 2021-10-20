import { BACKEND_URL } from "../config";

export default function publicFileRemove(name: string) {
    return fetch(BACKEND_URL + "/public-upload/" + name, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.text())
}