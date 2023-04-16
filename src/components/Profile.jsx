import React from "react";
import Messages from "./Messages";
import { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";
import Inbox from "./inbox";

const Profile = ({ token }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMe = async () => {
            const { data: { messages } } = await fetchMe(token);
            setMessages(messages);
        };
        if (token) {
            getMe();
        }
    }, [token]);

    return (
        <div className="profile">
            <h1 className="yourMessage">Your Messages: </h1>
            <div className="inbox">
                <h2>Inbox</h2>
                {messages.map(message => (
                    <div key={message._id} className="message">
                        {message.post.author.username === localStorage.getItem("username") ? <Inbox message={message} id={message._id} token={token} /> : null}
                    </div>
                ))}
            </div>
            <div className="outbox">
                <h2>Out Going Messages</h2>
                {messages.map(message => (
                    <div key={message._id} className="message">
                        {message.post.author.username !== localStorage.getItem("username") ? <Messages message={message} id={message._id} token={token} /> : null}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Profile;