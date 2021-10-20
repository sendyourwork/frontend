import React, { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Message } from "../interfaces/message"
import { AuthContext, UserContext } from "../pages/_app";
import { BACKEND_URL } from '../config';

export default function Chat(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const formRef = useRef<HTMLFormElement | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);
    const { user } = useContext(UserContext);
    const [socket, setSocket] = useState(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (inputValue) {
            socket.emit('chat-msg-client', {
                msg:inputValue,
                username: user.username
            });
            setInputValue('');
        }
    }

    const changeFormVisible = () => {
        formRef.current?.classList.toggle('hidden');
        formRef.current?.classList.toggle('flex');
        const currentOverflowStatus = document.body.style.overflow;
        document.body.style.overflow = currentOverflowStatus ? "" : "hidden";
    }

    useEffect(() => {
        if (messages.length > 200) {
            setMessages(messages.slice(1));
        }
        chatRef.current?.scrollTo({ top: chatRef.current?.scrollHeight, behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        const newSocket = io(BACKEND_URL, {
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        newSocket.on('chat-msg-server',(msg: Message) => {
            setMessages(prevMessages => [...prevMessages, msg]);
        })
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <form
                className="fixed left-0 top-0 w-full h-full pb-24 hidden xl:flex flex-col justify-end bg-white px-4 xl:pr-0 xl:top-auto xl:static xl:left-auto xl:bottom-0 xl:right-0 xl:h-auto xl:py-0"
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <div className="flex flex-col py-2 gap-2 xl:max-h-96 overflow-auto" ref={chatRef}>
                    {messages.map(({ msg, username }: Message, index) => {
                        if (user.username === username) {
                            return <p className="py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-3/4 mr-3 text-white break-words" key={index}>{msg}</p>
                        }
                        return (
                            <div key={index}>
                                {username !== messages[index - 1]?.username && <p className="text-gray-500 text-sm">{username}</p>}
                                <p className="py-2 px-4 bg-white w-max rounded-3xl max-w-3/4 border border-gray-200 break-words">{msg}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full rounded outline-none myShadow py-4 px-2 mr-4 xl:mr-0 mt-8"
                    value={inputValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                />
            </form>
            <button className="p-5 rounded-full bg-blue-600 fixed bottom-5 right-5 hover:cursor-pointer xl:hidden" onClick={changeFormVisible}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" /></svg>
            </button>
        </>
    )
}