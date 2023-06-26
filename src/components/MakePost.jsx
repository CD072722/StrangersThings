import React, { useState } from "react";
import { makePost } from "../api/post";
import "../App.css"


// MakePost component
const MakePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    // Handle checkbox change
    const HandlecheckBox = (e) => {
        setWillDeliver(e.target.checked)
    }

    // Handle form submission
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const response = await makePost(token, title, description, price, location, willDeliver);
        console.log(response);
        if (response.success) {
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
            setWillDeliver(false);
        } 
    }

    // Render the form for creating a new post
    return (
        <div>
            <p className="myHeader">Create a New Post</p>
            <div className="makePost">
                <form onSubmit={Handlesubmit} className="createForm">
                    <input type="text" value={title} placeholder="Title*" onChange={(e) => setTitle(e.target.value)} className="createInfo"></input>
                    <input type="text" value={description} placeholder="Description*" onChange={(e) => setDescription(e.target.value)} className="createInfo"></input>
                    <input type="text" value={price} placeholder="Price*" onChange={(e) => setPrice(e.target.value)} className="createInfo"></input>
                    <input type="text" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} className="createInfo"></input>
                    <div className="createDeliver">
                        <label>Will Deliver: </label>
                        <input type="checkbox" value={willDeliver} onChange={HandlecheckBox} className="checkbox"></input>
                    </div>
                    <button type="submit" className="createSubmit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default MakePost;
