export const ChatMessage = ({message, isUser}) =>{
    return(
        <div className={`message ${isUser ? 'user': 'bot'}`}  >
            <div className="message-content">
                <span className="author" > {isUser ? 'tu': 'IA'}
                    <p>{message}</p>

                </span>
            </div>

        </div>
    )
}