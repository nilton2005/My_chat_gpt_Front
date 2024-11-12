import { useEffect, useRef } from "react";
import {ChatMessage} from "./ChatMessage"

export const ChatWindow = ({messages}) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () =>{
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});

    };

    useEffect(()=>{ 
    scrollToBottom();
}, [messages])

return(
    <div className="chat-window">
    {
    console.log("formato")}
    {console.log( messages)
    }
        {messages.map((msg, indice) =>
        (
            <ChatMessage
            key={indice}
            message={msg.content}
            isUser = {msg.isUser}
            />
        )
        )}
        <div ref={messagesEndRef}  >
        </div>
    </div>
)


}