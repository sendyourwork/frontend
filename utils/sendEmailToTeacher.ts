import { BACKEND_URL } from "../config";

interface SendEmailI {
    username: string,
    school_class: string,
    topic: string, 
    subject_name: string, 
    filename: string,
    filecontent: string | ArrayBuffer
}

export default function sendEmailToTeacher({username, school_class, topic, subject_name, filename, filecontent}: SendEmailI) {
    return fetch(BACKEND_URL + "/sendMail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify({
            username,
            school_class,
            topic,
            subject_name,
            filename,
            filecontent
        }),
    })
    .then(response => response.text())
}