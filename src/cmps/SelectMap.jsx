import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import usa from '../style/map/usa.svg'
import iceland from '../style/map/Iceland.svg'
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';
const SelectMap = () => {

    const mystyle = {

    }
    return (
        <section className="home-section">
            <div className="center-headers">

                <div className="flex-col center-text">
                    <h3>USA</h3>
                    <Link to="/america">
                        <img className="usa-svg" src={usa} alt="test" />
                    </Link>
                </div>
                <div className="flex-col center-text">
                    <h3>ICELAND</h3>
                    <Link to="/iceland">
                        <img className="iceland-svg" src={iceland} alt="test"
                        /></Link>
                </div>

            </div>



        </section>
    )
}

export default SelectMap
