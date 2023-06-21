import React from "react";
import { deletePost } from "../api/post";


const DeletePost = ({ id }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await deletePost(id);
    }
    return (
        <div>
            <button className="deleteButton" onClick={handleDelete}>DELETE POST</button>
        </div>

    );
};

export default DeletePost;