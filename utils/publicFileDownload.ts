import { BACKEND_URL } from "../config";

export default function publicFileDownload(filename: string) {
    return fetch(BACKEND_URL + "/files/" + filename)
    .then(response => response.blob())
    .then(blob => {
        const element = document.createElement('a');
        element.href = URL.createObjectURL(blob);
        element.setAttribute('download', filename);
        element.click();
    })
}