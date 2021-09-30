import React, { useState } from "react";
import { Message } from "../interfaces/message"

export default function Chat(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const clientId = "Artiu";
    const [messages, setMessages] = useState<Message[]>(
    [
        {
            messageId: "adadaaddad",
            senderId: "abcd123",
            senderIcon: "dakdaj",
            message: "Wilczur OP"
        },
        {
            messageId: "daoadjdajoda",
            senderId:"Artiu",
            senderIcon: "adadad",
            message: "Wilczur Giga OP"
        }
    ]);
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setMessages([...messages, {messageId:"dalokdak", senderId: clientId, message: inputValue, senderIcon: "ojaofa"}]);
        setInputValue('');
    }
    return (
    <form className="px-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
        {messages.map(({messageId, senderId, senderIcon, message}: Message) => {
            if(clientId === senderId) {
                return <p className="py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-3/4 text-white break-words" key={messageId}>{message}</p>
            }
            return (
                <div key={messageId} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-black"></div>
                    <p className="py-2 px-4 bg-white rounded-3xl max-w-3/4 border border-gray-200 break-words">{message}</p>
                </div>
            )
        })
        }
        </div>
        <input 
            type="text" 
            placeholder="Type here..." 
            className="w-full rounded outline-none myShadow py-4 px-2 mt-8"
            value={inputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
        />
    </form>
    )
}