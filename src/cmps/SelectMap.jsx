import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import usa from '../style/map/usa.svg'
import iceland from '../style/map/Iceland.svg'
const SelectMap = () => {

   
    return (
        <section className="home-section">
            <div className="center-headers">

                <div className="flex-col center-text">
                    <h3 className="h3-border-radius" >USA</h3>
                    <Link to="/america">
                        <img className="usa-svg" src={usa} alt="test" />
                    </Link>
                </div>
                <div className="flex-col center-text">
                    <h3 className="h3-border-radius">ICELAND</h3>
                    <Link to="/iceland">
                        <img className="iceland-svg" src={iceland} alt="test"
                        /></Link>
                </div>

            </div>



        </section>
    )
}

export default SelectMap
