import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faMapMarked, faRoute } from '@fortawesome/free-solid-svg-icons'

const Stages = () => {
    return (
        <section className="stages">
            <li> Pick a Map <FontAwesomeIcon icon={faMapMarked} /></li>
            <li> Select route or use custom mode  <FontAwesomeIcon icon={faRoute} /></li>
            <li> Travel ! <FontAwesomeIcon icon={faPlaneDeparture} /></li>
        </section>
    )
}

export default Stages
