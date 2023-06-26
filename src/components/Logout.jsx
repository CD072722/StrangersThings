import React from 'react';
import { logout } from '../api/auth';

// Logout component
const Logout = ({ user, setToken, setUser }) => {

  // Handle user logout
  const handleLogout = () => {
    logout(setToken, setUser);
    navigate('/');
  };

  // Render the logout button and display the username
  return (
    <div className='out'>
      <button className="logout" onClick={handleLogout}>Log out</button>
      <h2 className="user">{user?.username}</h2>
    </div>
  );
};

export default Logout;
