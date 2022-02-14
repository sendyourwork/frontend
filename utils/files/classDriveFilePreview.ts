import { BACKEND_URL } from "../../config";

export default async function classDriveFilePreview(filename: string, school_class: string, subject: string) {
    fetch(`${BACKEND_URL}/files/${school_class}/${subject}/${filename}`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.blob())
    .then(blob => {
        window.open(URL.createObjectURL(blob));
    })
}