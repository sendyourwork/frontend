import { BACKEND_URL } from "../../config";

export default function sendResetRequest(email: string) {
    return fetch(BACKEND_URL + "/reset-token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email}),
    })
    .then(response => response.json())
}