import React, { useState } from "react";
import { postMessage } from "../api/messages";


const MessageForm = ({ id, token }) => {
    const [messagecontent, setMessagecontent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postMessage(id, token, messagecontent)
        setMessagecontent("")
    };

    return (
        <div>
            <form className="typing" onSubmit={handleSubmit}>
                <input className='textArea' type="text" value={messagecontent} placeholder="Send a message..." onChange={(e) => setMessagecontent(e.target.value)}></input>
                <button className="sendButton" type="submit">SEND</button>
            </form>
        </div>
    );
};

export default MessageForm;