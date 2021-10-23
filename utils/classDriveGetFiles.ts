import { BACKEND_URL } from "../config";

export default function classDriveGetFiles(school_class: string, subject: string) {
    return fetch(`${BACKEND_URL}/files/${school_class}/${subject}`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}