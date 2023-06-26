import React, { useState } from "react";
import { postMessage } from "../api/messages";


// MessageForm component
const MessageForm = ({ id, token }) => {
    const [messagecontent, setMessagecontent] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postMessage(id, token, messagecontent);
        setMessagecontent("");
    };

    // Render the message input form
    return (
        <div>
            <form className="typing" onSubmit={handleSubmit}>
                <input
                    className='textArea' 
                    type="text" 
                    value={messagecontent} 
                    placeholder="Send a message..." 
                    onChange={(e) => setMessagecontent(e.target.value)}
                />
                <button className="sendButton" type="submit">SEND</button>
            </form>
        </div>
    );
};

export default MessageForm;
