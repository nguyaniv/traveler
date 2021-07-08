import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import menu from '../../style/icons/menu.png'

const MobileNavModal = ({ toggleMobileModal }) => {
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(true)
    }, [])

    const onCloseModal = async () => {
        await setModal(false)
        await setTimeout(() => {
            toggleMobileModal()
        }, 1000);
    }
    return (

        <section className={modal ? "mobile-nav-modal active" : "mobile-nav-modal"}>
            <img onClick={onCloseModal} src={menu} alt="menu" />
            <div className={modal ? "mobile-links active" : "mobile-links"}>
                <Link onClick={onCloseModal} to="/">HOME</Link>
                <Link onClick={onCloseModal} to="/iceland">ICELAND</Link>
                <Link onClick={onCloseModal} to="/usa">USA</Link>
                <Link onClick={onCloseModal} to="/contact-us">CONTACT-US</Link>
            </div>
        </section>
    )
}

export default MobileNavModal