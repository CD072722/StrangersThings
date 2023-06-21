import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import Home from './Home';
import PostsList from './PostsList';
import Profile from "./Profile"
import MyPosts from './MyPosts';

const RRoutes = ({ token, setToken, user, setUser }) => {
    return (
        <div className='routes'>
            <Routes>
                <Route path='/messages' element={<Profile token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/" element={<Home token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/login" element={<LoginForm token={token} setToken={setToken} user={user} setUser={setUser} />}></Route>
                <Route path="/posts" element={<PostsList token={token} setToken={setToken} />}></Route>
                <Route path='/myposts' element={<MyPosts/>}></Route>
            </Routes>
        </div>
    );
};

export default RRoutes;