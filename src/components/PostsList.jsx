import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/post";
import "../App.css";
import DeletePost from "./DeletePost";
import MessageForm from "./MessageForm";

// PostsList component
const PostsList = ({ token }) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Fetch posts data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchPosts();
            if (result.success) {
                setPosts(result.data.posts);
            }
        };
        fetchData();
    }, []);

    // Filter posts based on search term
    const filteredPosts = posts.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const authorMatch = post.author.username.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || authorMatch;
    });

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Function to handle pagination
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    // Render the posts list
    return (
        <div className="postsList">
            <div className="searchBar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                />
            </div>
            {currentPosts.map(post => (
                <div key={post._id} className="post">
                    <h2 className="postTitle">{post.title}</h2>
                    <p className="description">{`About: ${post.description}`}</p>
                    <p className="postInfo">{`Price: ${post.price}`}</p>
                    <p className="postInfo">{`Location: ${post.location}`}</p>
                    <p className="postInfo">{`Will Deliver: ${post.willDeliver ? "Yes" : "No"}`}</p>
                    <p className="postInfo">
                        {post.author.username === localStorage.getItem("user") ? (
                            ""
                        ) : (
                            `Posted by: ${post.author.username}`
                        )}
                    </p>
                    <div className="postButton">
                        {post.author.username === localStorage.getItem("user") ? (
                            <DeletePost id={post._id} />
                        ) : null}
                        {post.author.username !== localStorage.getItem("user") ? (
                            <MessageForm id={post._id} token={token} />
                        ) : null}
                    </div>
                </div>
            ))}
            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((item, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        id="paginateButton"
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PostsList;


