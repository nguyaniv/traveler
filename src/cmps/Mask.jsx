import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faComments } from '@fortawesome/free-solid-svg-icons'
import { faSmileWink } from '@fortawesome/free-regular-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
const Mask = () => {
    return (
        <div className="mask">
            <div className="travel">
                <li>travel with confident</li>
                <span> <FontAwesomeIcon style={{ color: 'brown' }} size={"2x"} icon={faBook} /></span>
            </div>
            <div className="good-hands">
                <li>You are in good hands </li>
                <span> <FontAwesomeIcon style={{ backgroundColor: '#ffeb3b', borderRadius: '100%' }} size={"2x"} icon={faSmileWink} /></span>
            </div>
            <div className="flexible route options">
                <li>Flexible route options</li>
                <span> <FontAwesomeIcon style={{ color: 'green' }} size={"2x"} icon={faEnvira} /></span>
            </div>
            <div className="great-review">
                <li>Great reviews </li>
                <span> <FontAwesomeIcon style={{ color: '#eee' }} size={"2x"} icon={faComments} /></span>
            </div>
        </div>
    )
}

export default Mask
