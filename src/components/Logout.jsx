import React from 'react';
import { logout } from '../api/auth';

const Logout = ({ user, setToken, setUser }) => {

  const handleLogout = () => {
    logout(setToken, setUser);
    navigate('/');
  };

  return (
    <div className='out'>
      <button className="logout" onClick={handleLogout}>Log out</button>
      <h2 className="user">{user?.username}</h2>
    </div>
  );
};

export default Logout;
