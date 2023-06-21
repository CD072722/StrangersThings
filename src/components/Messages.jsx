import React from "react";
import MessageForm from "./MessageForm";

const Messages = ({ message, token, id }) => {
    return (
        <div className="messageList">
            <div className="messageTitle">{message.post.title}</div>
            <div className="messageInfo">{`Sent to: ${message.post.author.username}`}</div>
            <div className="messageInfo">{`Message: "${message.content}"`}</div>
        </div>
    );
};

export default Messages;