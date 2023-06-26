import React from "react";
import Messages from "./Messages";
import { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";
import Inbox from "./inbox";

// Profile component
const Profile = ({ token }) => {
    const [messages, setMessages] = useState([]);

    // Fetch user's messages
    useEffect(() => {
        const getMe = async () => {
            const { data: { messages } } = await fetchMe(token);
            setMessages(messages);
        };
        if (token) {
            getMe();
        }
    }, [token]);

    const currentUser = localStorage.getItem('user');

    // Filter user's sent and received messages
    const userSentMessages = messages.filter(message => message.post.author.username !== currentUser);
    const userReceivedMessages = messages.filter(message => message.post.author.username === currentUser);

    // Render the profile
    return (
        <div className="profile">
            <div className="right">
                <div className="inbox">
                    <p className="myHeader">Inbox</p>
                    <p className="noPosts">{userReceivedMessages.length === 0 ? "You have no messages" : null}</p>
                    {messages.map(message => (
                        <div key={message._id} className="message">
                            {/* Render the inbox message component for messages received by the user */}
                            {message.post.author.username === localStorage.getItem("user") ?
                                <Inbox message={message} id={message._id} token={token} /> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className="left">
                <div className="outbox">
                    <p className="myHeader">Outgoing Messages</p>
                    <p className="noPosts">{userSentMessages.length === 0 ? "You have no messages" : null}</p>
                    {messages.map(message => (
                        <div key={message._id} className="message">
                            {/* Render the messages component for messages sent by the user */}
                            {message.post.author.username !== localStorage.getItem("user") ?
                                <Messages message={message} id={message._id} token={token} /> : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
