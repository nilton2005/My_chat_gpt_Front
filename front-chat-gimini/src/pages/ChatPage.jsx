import { useState } from "react"
import { makeRequest } from "../api/gimini.api";
import {ChatInput} from "../components/console/ChatInput";
import {ChatWindow} from "../components/console/ChatWindow";
export const ChatPage = () =>{
    const [messages, setMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (message) =>{
        setIsLoading(true)

        //add message of user

        setMessage(prev => [...prev, {content: message, isUser: true}]);
        try{
            const response = await makeRequest(message);
            const iaResponse = await response.data.candidates[0].content.parts[0].text;

            console.log(iaResponse); 
            setMessage(prev => [...prev, {content: iaResponse, isUser: false}]);

            //add ia response
        }catch(error){
            console.log("no se pudo ingresa a la api")
            console.error("El error es " , error);
        }finally{
            setIsLoading(false)
        }
    };

    return(
        
            <div className="chat-container">
                <ChatWindow messages={messages} />
                <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading}/>
            </div>
    )
}