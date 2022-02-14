import { BACKEND_URL } from "../../config";

export default function classDriveFileDownload(filename: string, school_class: string, subject: string) {
    return fetch(`${BACKEND_URL}/files/${school_class}/${subject}/${filename}`, {
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