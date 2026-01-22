import React, { useState, useEffect, useRef } from "react";

export default function ChatModel() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    const getTime = () =>
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const sendMessage = () => {
        if (!input.trim()) return;

        // User message
        const userMsg = {
            id: Date.now(),
            text: input,
            sender: "user",
            time: getTime(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        // Temporary static system reply
        setTimeout(() => {
            const systemMsg = {
                id: Date.now() + 1,
                text: "Thanks for reaching out. Our team will respond shortly.",
                sender: "system",
                time: getTime(),
            };

            setMessages((prev) => [...prev, systemMsg]);
        }, 600);
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="w-full h-[72vh] flex flex-col relative pr-5 font-['Poppins']">

            {/* Chat body */}
            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-3 no-scrollbar border-l border-[#E9EAEB] bg-[#FCFCFC]">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                            }`} >
                        <div
                            className={`max-w-[75%]  px-3 py-2 text-sm shadow-sm
                 ${msg.sender === "user"
                                    ? "bg-[#dcf8c6] text-[#303030] rounded-[12px_12px_0_12px]"
                                    : "bg-[#F3F4F6] text-gray-900 rounded-[ 0_12px_12px_12px]"
                                }`}
                        >
                            {/* <p className="text-sm/4.5 w-full ">{msg.text}</p> */}
                            {msg.file ? (
                                <>

                                    {msg.file.type.startsWith("image/") && (
                                        <img
                                            src={URL.createObjectURL(msg.file)}
                                            alt={msg.file.name}
                                            className="max-w-[200px] rounded-lg"
                                        />
                                    )}


                                    {!msg.file.type.startsWith("image/") && (
                                        <div className="flex items-center gap-2 text-white">
                                            <span>📎</span>
                                            <span className="truncate max-w-[180px]">
                                                {msg.file.name}
                                            </span>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-sm/4.5 w-full">{msg.text}</p>
                            )}

                            <div className="flex items-center justify-end gap-1 text-[10px]  mt-1">
                                <span className={` ${msg.sender === "user" ? "text-gray-800" : "text-gray-800"}`}>{msg.time}</span>
                                {msg.sender === "user" && <span><svg width="16" height="15" viewBox="0 0 16 15" class="text-[#4FC3F7]"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l3.61 3.463c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512z"></path></svg></span>}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="sticky bottom-0 left-0 border border-[#E9EAEB] p-4 flex items-center gap-3 bg-white">
                <div className="px-3.5 py-2.5 flex items-center gap-2 rounded-xl border border-[#D5D7DA] w-full">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.33333 5.83333L7.90333 6.995C7.34 8.51833 7.05833 9.28 6.5025 9.83583C5.94667 10.3917 5.185 10.6733 3.66167 11.2367L2.5 11.6667L3.66167 12.0967C5.185 12.66 5.94667 12.9425 6.5025 13.4975C7.05833 14.0525 7.34 14.815 7.90333 16.3383L8.33333 17.5L8.76333 16.3383C9.32667 14.815 9.60917 14.0533 10.1642 13.4975C10.7192 12.9417 11.4817 12.66 13.005 12.0967L14.1667 11.6667L13.005 11.2367C11.4817 10.6733 10.72 10.3917 10.1642 9.83583C9.60833 9.28 9.32667 8.51833 8.76333 6.995L8.33333 5.83333ZM15 2.5L14.8158 2.9975C14.5742 3.65083 14.4533 3.9775 14.2158 4.215C13.9775 4.45333 13.6508 4.57417 12.9975 4.815L12.5 5L12.9983 5.18417C13.6508 5.42583 13.9775 5.54667 14.215 5.78417C14.4533 6.0225 14.5742 6.34917 14.815 7.0025L15 7.5L15.1842 7.0025C15.4258 6.34917 15.5467 6.0225 15.7842 5.785C16.0225 5.54667 16.3492 5.42583 17.0025 5.185L17.5 5L17.0017 4.81583C16.3492 4.57417 16.0225 4.45333 15.785 4.21583C15.5467 3.9775 15.4258 3.65083 15.185 2.9975L15 2.5Z" stroke="#717680" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Enter message here..."
                        className="text-base/6 text-[#717680] focus:outline-none w-full h-full"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                </div>
                <label className="relative cursor-pointer flex items-center">
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        aria-label="upload-file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            setMessages((prev) => [
                                ...prev,
                                {
                                    id: Date.now(),
                                    file,
                                    sender: "user",
                                    time: getTime(),
                                },
                            ]);
                        }}
                    />
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 15.75C18 17.4833 17.3917 18.9583 16.175 20.175C14.9583 21.3917 13.4833 22 11.75 22C10.0167 22 8.54167 21.3917 7.325 20.175C6.10833 18.9583 5.5 17.4833 5.5 15.75V6.5C5.5 5.25 5.93767 4.18767 6.813 3.313C7.68833 2.43833 8.75067 2.00067 10 2C11.2493 1.99933 12.312 2.437 13.188 3.313C14.064 4.189 14.5013 5.25133 14.5 6.5V15.25C14.5 16.0167 14.2333 16.6667 13.7 17.2C13.1667 17.7333 12.5167 18 11.75 18C10.9833 18 10.3333 17.7333 9.8 17.2C9.26667 16.6667 9 16.0167 9 15.25V7C9 6.71667 9.096 6.47933 9.288 6.288C9.48 6.09667 9.71733 6.00067 10 6C10.2827 5.99933 10.5203 6.09533 10.713 6.288C10.9057 6.48067 11.0013 6.718 11 7V15.25C11 15.4667 11.071 15.646 11.213 15.788C11.355 15.93 11.534 16.0007 11.75 16C11.966 15.9993 12.1453 15.9283 12.288 15.787C12.4307 15.6457 12.5013 15.4667 12.5 15.25V6.5C12.4833 5.8 12.2377 5.20833 11.763 4.725C11.2883 4.24167 10.7007 4 10 4C9.29933 4 8.70767 4.24167 8.225 4.725C7.74233 5.20833 7.50067 5.8 7.5 6.5V15.75C7.48333 16.9333 7.89167 17.9377 8.725 18.763C9.55833 19.5883 10.5667 20.0007 11.75 20C12.9167 20 13.9083 19.5877 14.725 18.763C15.5417 17.9383 15.9667 16.934 16 15.75V7C16 6.71667 16.096 6.47933 16.288 6.288C16.48 6.09667 16.7173 6.00067 17 6C17.2827 5.99933 17.5203 6.09533 17.713 6.288C17.9057 6.48067 18.0013 6.718 18 7V15.75Z" fill="#636E72" />
                    </svg>
                </label>

                <button
                    onClick={sendMessage}
                    className="bg-[#309356]  p-3 rounded-xl hover:bg-green-600 border-2 border-[rgba(255,255,255,0.12)]"
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.74976 11.2501L17.4998 2.50014M8.85608 11.5235L11.0462 17.1552C11.2391 17.6513 11.3356 17.8994 11.4746 17.9718C11.5951 18.0346 11.7386 18.0347 11.8592 17.972C11.9983 17.8998 12.095 17.6518 12.2886 17.1559L17.7805 3.08281C17.9552 2.63516 18.0426 2.41133 17.9948 2.26831C17.9533 2.1441 17.8558 2.04663 17.7316 2.00514C17.5886 1.95736 17.3647 2.0447 16.9171 2.21939L2.84398 7.71134C2.34808 7.90486 2.10013 8.00163 2.02788 8.14071C1.96524 8.26129 1.96532 8.40483 2.0281 8.52533C2.10052 8.66433 2.34859 8.7608 2.84471 8.95373L8.47638 11.1438C8.57708 11.183 8.62744 11.2026 8.66984 11.2328C8.70742 11.2596 8.74028 11.2925 8.76709 11.3301C8.79734 11.3725 8.81692 11.4228 8.85608 11.5235Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}
