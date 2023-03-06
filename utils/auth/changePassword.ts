import { BACKEND_URL } from "../../config";

export default function changePassword(token: string, password) {
    return fetch(BACKEND_URL + "/reset-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token, password}),
    })
    .then(response => response.json())
}