import React, { useState } from "react";
import { Message } from "../interfaces/message"

export default function Chat(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const clientId = "Artiu";
    const [messages, setMessages] = useState<Message[]>(
    [
        {
            id: "abcd123",
            icon: "dakdaj",
            message: "Wilczur OP"
        },
        {
            id:"Artiu",
            icon: "adadad",
            message: "Wilczur Giga OP"
        }
    ]);
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setMessages([...messages, {id: clientId, message: inputValue, icon: "ojaofa"}]);
        setInputValue('');
    }
    return (
    <form className="px-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
        {messages.map(({id, icon, message}: Message) => {
            return (
                <>
                    {clientId === id ?
                    <p className="py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-max text-white" key={id}>{message}</p>
                    :
                    <div key={id} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-black"></div>
                        <p className="py-2 px-4 bg-white rounded-3xl max-w-max border border-gray-200">{message}</p>
                    </div>
                    }
                </>
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