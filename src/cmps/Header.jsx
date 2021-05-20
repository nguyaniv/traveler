import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    return (
        <header className="home-header">
            <div className="center-headers">
                <div className="home-header iceland">
                    <h2>ICELAND</h2>
                    <div className="main-header-links">
                        <Link to="/iceland" className="main-header-link" >Our routes</Link>
                    </div>
                </div>
                <div className="home-header america">
                    <h2>AMERICA</h2>
                    <div className="main-header-links">
                        <Link to="/america" className="main-header-link" >Our routes</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
