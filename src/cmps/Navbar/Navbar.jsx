import React, { useState, useEffect } from 'react'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// import MobileNavbar from './MobileNavbar';

export default function Navbar({toggleMobileModal}) {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 960;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return width > breakpoint ? <DesktopNav /> : <MobileNav toggleMobileModal={toggleMobileModal} />


}
