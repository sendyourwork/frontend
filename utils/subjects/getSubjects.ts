import { BACKEND_URL } from "../../config";

export default function getSubjects(school_class: string) {
    return fetch(BACKEND_URL + "/subjects/" + school_class, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}