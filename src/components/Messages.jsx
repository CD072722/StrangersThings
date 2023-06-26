import React from "react";

// Messages component
const Messages = ({ message }) => {
    return (
        <div className="messageList">
            <div className="messageTitle">{message.post.title}</div>
            <div className="messageInfo">{`Sent to: ${message.post.author.username}`}</div>
            <div className="messageInfo">{`Message: "${message.content}"`}</div>
        </div>
    );
};

export default Messages;
