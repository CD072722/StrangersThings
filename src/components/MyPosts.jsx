import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/post";
import "../App.css"
import MakePost from './MakePost';
import DeletePost from "./DeletePost";

const MyPosts = () => {
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
    const userPosts = posts.filter((post) => post.author.username === localStorage.getItem("user"));

    return (
        <div className='myPosts'>
            <div className='myLeft'>
                <p className="myHeader">My Posts</p>
                {userPosts.length === 0 ? (
          <p className="noPosts">You have no posts</p>
        ) : (
          <div>
            {userPosts.map((post) => (
              <div key={post._id} className="myPost">
                <h2 className="myPostTitle">{post.title}</h2>
                <p className="myDescription">About: {post.description}</p>
                <p className="myPostInfo">Price: {post.price}</p>
                <p className="myPostInfo">Location: {post.location}</p>
                <p className="myPostInfo">
                  Will Deliver: {post.willDeliver ? "Yes" : "No"}
                </p>
                <div className="myPostButton">
                  <DeletePost id={post._id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
            <div className='myRight'>
                <MakePost />
            </div>
        </div>
    );
};

export default MyPosts;