import { BACKEND_URL } from "../../config";

interface RegisterI{
    username: string,
    password: string,
    schoolID: string,
    classID: string,
    email: string,
}
export default function register({username, password, schoolID, classID, email}: RegisterI) {
    return fetch(BACKEND_URL + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            email,
            school_class: schoolID + "_" + classID
        }),
    })
    .then(response => response.json())
}