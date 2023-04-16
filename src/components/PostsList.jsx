import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/post";
import { Link } from "react-router-dom";
import "../App.css"
import DeletePost from "./DeletePost";
import MessageForm from "./MessageForm";


const PostsList = ({ token }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchPosts();
            if (result.success) {
                setPosts(result.data.posts);
            }
        };
        fetchData();
    }, [])
    return (
        <div className="postsList">
            <div>
                <Link to="/posts/create" className="linkCreate">CREATE POST</Link>
            </div>
            {posts.map(post => (

                <div key={post._id} className="post">
                    <h2 className="postTitle">{post.title}</h2>
                    <p className="postInfo">{`Description: ${post.description}`}</p>
                    <p className="postInfo">{`Price: ${post.price}`}</p>
                    <p className="postInfo">{`Location: ${post.location}`}</p>
                    <p className="postInfo">{`Will Deliver: ${post.willDeliver ? 'Yes' : 'No'}`}</p>
                    <p className="postInfo">{`Posted by: ${post.author.username}`}</p>
                    <div className="postButton">
                        {post.author.username === localStorage.getItem("username") ? <DeletePost id={post._id} /> : null}
                        {post.author.username !== localStorage.getItem("username") ? <MessageForm id={post._id} token={token} /> : null}
                    </div>
                </div>

            ))}
        </div>
    );
};

export default PostsList;