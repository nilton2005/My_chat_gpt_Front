import { useState } from "react"

export const ChatInput = ({onSendMessage, isLoading}) =>{
    const [message, setMessage] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(message.trim()){
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input">
            <input type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Preguntame lo que quieras"
            disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !message.trim()} >
                    Enviar
            </button>
        </form>
    );
};