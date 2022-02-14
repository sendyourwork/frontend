import { BACKEND_URL } from "../../config";

export default function getChatMessages(school_class: string) {
    return fetch(`${BACKEND_URL}/chat/${school_class}`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}