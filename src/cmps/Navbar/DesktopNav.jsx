import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const DesktopNav = () => {
    return (
        <nav className="desktop">
            <h2>TRAVELER</h2>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/travel">Travel</Link>
            </div>
        </nav>
    )
}

export default DesktopNav
