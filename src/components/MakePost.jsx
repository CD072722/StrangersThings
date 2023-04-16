import React, { useState } from "react";
import { makePost } from "../api/post";


const MakePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const HandlecheckBox = (e) => {
        setWillDeliver(e.target.checked)
    }

    const Handlesubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        const response = await makePost(token, title, description, price, location, willDeliver)
        if (response.success) {
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
            setWillDeliver(false);
        } else {
            alert("Post unsuccessful. Please log in and fill out all required fields.")
        }

    }
    return (
        <div>
            <h1 className="createHeader">Create Your Post</h1>
            <div className="makePost">
                <form onSubmit={Handlesubmit} className="createForm">
                    <input type="text" value={title} placeholder="Title*" onChange={(e) => setTitle(e.target.value)} className="createInfo"></input>
                    <input type="text" value={description} placeholder="Description*" onChange={(e) => setDescription(e.target.value)} className="createInfo"></input>
                    <input type="text" value={price} placeholder="Price*" onChange={(e) => setPrice(e.target.value)} className="createInfo"></input>
                    <input type="text" value={location} placeholder="Location*" onChange={(e) => setLocation(e.target.value)} className="createInfo"></input>
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