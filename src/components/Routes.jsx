import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import Home from './Home';
import PostsList from './PostsList';
import Profile from "./Profile"
import MyPosts from './MyPosts';

// RRoutes component
const RRoutes = ({ token, setToken, user, setUser }) => {
    return (
      <div className='routes'>
        <Routes>
          <Route path='/messages' element={<Profile token={token} setToken={setToken} user={user} setUser={setUser} />} />
          <Route path="/" element={<Home token={token} setToken={setToken} user={user} setUser={setUser} />} />
          <Route path="/login" element={<LoginForm token={token} setToken={setToken} user={user} setUser={setUser} />} />
          <Route path="/posts" element={<PostsList token={token} setToken={setToken} />} />
          <Route path='/myposts' element={<MyPosts />} />
        </Routes>
      </div>
    );
  };
  
  export default RRoutes;
  