import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Message } from "../../interfaces/message";
import { BACKEND_URL } from "../../config";
import getChatMessages from "../../utils/chat/getChatMessages";
import { useUser } from "../../contexts/UserContext";

export default function Chat(): JSX.Element {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const formRef = useRef<HTMLFormElement | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);
    const { user } = useUser();
    const [socket, setSocket] = useState(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (inputValue) {
            socket.emit("chat-msg-client", {
                msg: inputValue,
                username: user.username,
            });
            setInputValue("");
        }
    };

    const changeFormVisible = () => {
        formRef.current?.classList.toggle("hidden");
        formRef.current?.classList.toggle("flex");
        const currentOverflowStatus = document.body.style.overflow;
        document.body.style.overflow = currentOverflowStatus ? "" : "hidden";
    };

    useEffect(() => {
        if (messages.length > 200) {
            setMessages(messages.slice(1));
        }
        chatRef.current?.scrollTo({ top: chatRef.current?.scrollHeight, behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        (async () => {
            const res = await getChatMessages(user.school_class);
            setMessages(res);
        })();
        const newSocket = io(BACKEND_URL, {
            extraHeaders: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            forceNew: true,
        });
        newSocket.on("chat-msg-server", (msg: Message) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <form
                className="xl:max-h-3/4 z-30 fixed left-0 top-0 w-full h-full pb-24 hidden xl:flex flex-col justify-end bg-white px-4 xl:pr-0 xl:top-auto xl:static xl:left-auto xl:bottom-0 xl:right-0 xl:h-auto xl:py-0"
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <div className="flex flex-col py-2 gap-2 overflow-auto" ref={chatRef}>
                    {messages.map(({ msg, username }: Message, index) => {
                        if (user.username === username) {
                            return (
                                <p
                                    className="py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-3/4 mr-3 text-white break-words"
                                    key={index}
                                >
                                    {msg}
                                </p>
                            );
                        }
                        return (
                            <div key={index}>
                                {username !== messages[index - 1]?.username && (
                                    <p className="text-gray-500 text-sm">{username}</p>
                                )}
                                <p className="py-2 px-4 bg-white w-max rounded-3xl max-w-3/4 border border-gray-200 break-words">
                                    {msg}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full myShadow py-4 px-2 mr-4 xl:mr-0 mt-8 flex justify-between gap-2">
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="outline-none w-full"
                        value={inputValue}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setInputValue(event.target.value)
                        }
                    />
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#4158D0"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
                        </svg>
                    </button>
                </div>
            </form>
            <button
                className="p-3 rounded-full bg-blue-600 fixed bottom-5 right-5 hover:cursor-pointer xl:hidden z-30"
                onClick={changeFormVisible}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />
                </svg>
            </button>
        </>
    );
}
