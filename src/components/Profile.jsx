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
    const currentUser = localStorage.getItem('user');
    const userSentMessages = messages.filter(message => message.post.author.username !== currentUser);
const userReceivedMessages = messages.filter(message => message.post.author.username === currentUser);

    return (
        <div className="profile">
            <div className="right">
                <div className="inbox">
                    <p className="myHeader">Inbox</p>
                    <p className="noPosts">{userReceivedMessages.length === 0 ? "You have no messages" : null}</p>
                    {messages.map(message => (
                        <div key={message._id} className="message">
                            {message.post.author.username === localStorage.getItem("user") ?
                                <Inbox message={message} id={message._id} token={token} /> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className="left">
                <div className="outbox">
                    <p className="myHeader">Out Going Messages</p>
                    <p className="noPosts">{userSentMessages.length === 0 ? "You have no messages" : null}</p>
                    {messages.map(message => (
                        <div key={message._id} className="message">
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