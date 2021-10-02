import React, { useRef, useState } from "react";
import { Message } from "../interfaces/message"

export default function Chat(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
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
    const formRef = useRef<HTMLFormElement | null>(null);
    const clientId = "Artiu";

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setMessages([...messages, {messageId:"dalokdak", senderId: clientId, message: inputValue, senderIcon: "ojaofa"}]);
        setInputValue('');
    }

    const changeFormVisible = () => {
        formRef.current?.classList.toggle('invisible');
    }

    return (
    <>
        <form 
            className="fixed top-0 left-0 w-full h-5/6 py-6 flex flex-col justify-end bg-white px-4 xl:h-auto xl:static invisible xl:visible xl:block xl:py-0" 
            onSubmit={handleSubmit} 
            ref={formRef}
        >
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
                className="xl:w-full rounded outline-none myShadow py-4 px-2 mt-8"
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
            />
        </form>
        <button className="p-5 rounded-full bg-blue-600 fixed bottom-5 right-5 hover:cursor-pointer xl:hidden" onClick={changeFormVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/></svg>
        </button>
    </>
    )
}