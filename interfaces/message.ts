interface BaseMessage {
    time: Date;
    msg: string;
}

export interface Message extends BaseMessage {
    type: "userMessage" | "systemMessage";
    username?: string;
}

export interface UserMessage extends BaseMessage {
    username: string;
}

export interface SystemMessage extends BaseMessage {}

export interface MessageFromDb extends BaseMessage {
    username?: string;
    system?: boolean;
}
