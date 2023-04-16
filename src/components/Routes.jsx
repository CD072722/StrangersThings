import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import Home from './Home';
import PostsList from './PostsList';
import MakePost from './MakePost';
import Register from "./Register";
import Profile from "./Profile"

const RRoutes = ({ token, setToken, user, setUser }) => {
    return (
        <div className='routes'>
            <Routes>
                <Route path='/users/profile' element={<Profile token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/" element={<Home token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/users/login" element={<LoginForm token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/posts" element={<PostsList token={token} setToken={setToken} />}></Route>
                <Route path="/posts/create" element={<MakePost token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/register" element={<Register token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
            </Routes>
        </div>
    );
};

export default RRoutes;