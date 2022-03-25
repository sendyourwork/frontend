export interface Message {
    type: "userMessage" | "systemMessage";
    username?: string;
    msg: string;
}

export interface UserMessage {
    username: string;
    msg: string;
}

export interface SystemMessage {
    msg: string;
}
