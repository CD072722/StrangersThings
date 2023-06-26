import React from "react";

//Display messages for user
const Inbox = ({ message }) => {
    return (
        <div className="messageList">
            <div className="messageTitle">{message.post.title}</div>           
            <div className="messageInfo">{`From: ${message.fromUser.username}`}</div>
            <div className="messageInfo">{`Message: "${message.content}"`}</div>
        </div>
    );
};

export default Inbox;