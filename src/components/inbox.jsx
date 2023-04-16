import React from "react";
import MessageForm from "./MessageForm";

const Inbox = ({ message, token, id }) => {
    return (
        <div className="messageList">
            <div className="messageTitle">{message.post.title}</div>           
            <div className="messageInfo">{`From: ${message.fromUser.username}`}</div>
            <div className="messageInfo">{`Message: "${message.content}"`}</div>
            <p className="reply">Reply:</p>
            <div className="postButton">               
                <MessageForm id={id} token={token} />
            </div>
        </div>
    );
};

export default Inbox;