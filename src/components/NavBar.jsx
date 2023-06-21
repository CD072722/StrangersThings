import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const NavBar = ({ setToken, setUser, user, token }) => {
    const [activeLink, setActiveLink] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };

    const handleLoginModalOpen = () => {
        setShowLoginModal(true);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout(setToken, setUser);
        navigate('/');
        location.reload();
    };
    return (
        <div className="Navbar">
            <Link to="/" className='logo'><img src="/img/navLogo.png" /></Link>
            <ul className="links">
                {token ? <Link to="/messages" className={activeLink === "messages" ? "active" : ""} onClick={() => handleLinkClick("messages")}>MESSAGES</Link> : null}
                {token ? <Link to="/myposts" className={activeLink === "myPosts" ? "active" : ""} onClick={() => handleLinkClick("myPosts")}>MY POSTS</Link> : null}
                <Link to="/posts" className={activeLink === "posts" ? "active" : ""} onClick={() => handleLinkClick("posts")}>POSTS</Link>
                {token ? (
                    <p className="username">{localStorage.getItem("user")}</p>
                ) : (
                    <button className='logout' onClick={handleLoginModalOpen}>Login</button>
                )}
                {token ? <button className='logout' onClick={handleLogout}>LOGOUT</button> : null}

                
            </ul >
            {showLoginModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <Login
                                setToken={setToken}
                                setUser={setUser}
                                onClose={handleLoginModalClose}
                            />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default NavBar;