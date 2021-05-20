import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faComments } from '@fortawesome/free-solid-svg-icons'
import { faSmileWink } from '@fortawesome/free-regular-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
const Mask = () => {
    return (
        <div className="mask">
        <div className="travel">
            <li>travel with confident<span> <FontAwesomeIcon  style={{color:'brown'}} size={"2x"} icon={faBook} /></span></li>
        </div>
        <div className="good-hands">
            <li>You are in good hands <span> <FontAwesomeIcon  style={{backgroundColor:'#ffeb3b',borderRadius:'100%'}} size={"2x"} icon={faSmileWink} /></span></li>
        </div>
        <div className="flexible route options">
            <li>Flexible route options <span> <FontAwesomeIcon  style={{color:'green'}} size={"2x"} icon={faEnvira} /></span></li>
        </div>
        <div className="great-review">
            <li>Great reviews <span> <FontAwesomeIcon style={{color:'#eee'}} size={"2x"} icon={faComments} /></span></li>
        </div>
    </div>
    )
}

export default Mask
