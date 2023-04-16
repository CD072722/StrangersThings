import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="links">
                <Link to="/" className="link">HOME</Link>
                <Link to="/users/profile" className="link">PROFILE</Link>
                <Link to="/posts" className="link">POSTS</Link>
                <Link to="/users/login" className="link">LOGIN/ LOGOUT</Link>
            </div>
        </div>
    );
};

export default NavBar;