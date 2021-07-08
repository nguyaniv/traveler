import React from 'react'
import menu from '../../style/icons/menu.png'
const MobileNav = ({ toggleMobileModal }) => {

    return (
        <nav className={"mobile-nav"}>
            <h3>TRAVELER</h3>
            <img onClick={toggleMobileModal} src={menu} alt="menu" />
        </nav>
    )
}

export default MobileNav
