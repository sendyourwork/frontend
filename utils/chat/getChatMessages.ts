import { BACKEND_URL } from "../../config";
import { Message, MessageFromDb } from "../../interfaces/message";

export default function getChatMessages(school_class: string) {
    return fetch(`${BACKEND_URL}/chat/${school_class}`, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((result) =>
            result.map((msg: MessageFromDb): Message => {
                if (msg.system) {
                    return { ...msg, type: "systemMessage" };
                }
                return { ...msg, type: "userMessage" };
            })
        );
}
