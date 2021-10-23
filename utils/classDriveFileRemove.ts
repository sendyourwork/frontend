import { BACKEND_URL } from "../config";

export default function classDriveFileRemove(name: string, school_class: string, subject: string) {
    return fetch(`${BACKEND_URL}/files/${school_class}/${subject}/${name}`, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.text())
}