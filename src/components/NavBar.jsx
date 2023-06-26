import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

// NavBar component
const NavBar = ({ setToken, setUser, user, token }) => {
    const [activeLink, setActiveLink] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    // Handle click on navigation links
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    // Close the login modal
    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };

    // Open the login modal
    const handleLoginModalOpen = () => {
        setShowLoginModal(true);
    };

    // Handle logout
    const handleLogout = async (e) => {
        e.preventDefault();
        await logout(setToken, setUser);
        navigate('/');
        location.reload();
    };

    // Render the navigation bar
    return (
        <div className="Navbar">
            <Link to="/" className='logo'><img src="/img/navLogo.png" /></Link>
            <ul className="links">
                {/* Show messages link if user is logged in */}
                {token ? <Link to="/messages" className={activeLink === "messages" ? "active" : ""} onClick={() => handleLinkClick("messages")}>MESSAGES</Link> : null}
                {/* Show my posts link if user is logged in */}
                {token ? <Link to="/myposts" className={activeLink === "myPosts" ? "active" : ""} onClick={() => handleLinkClick("myPosts")}>MY POSTS</Link> : null}
                <Link to="/posts" className={activeLink === "posts" ? "active" : ""} onClick={() => handleLinkClick("posts")}>POSTS</Link>
                {/* Show username if user is logged in, otherwise show login button */}
                {token ? (
                    <p className="username">{localStorage.getItem("user")}</p>
                ) : (
                    <button className='logout' onClick={handleLoginModalOpen}>Login</button>
                )}
                {/* Show logout button if user is logged in */}
                {token ? <button className='logout' onClick={handleLogout}>LOGOUT</button> : null}
            </ul>

            {/* Show login modal if showLoginModal state is true */}
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
