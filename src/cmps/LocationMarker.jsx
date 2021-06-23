
/* global google */

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Marker, InfoWindow } from '@react-google-maps/api'
import { showModal, selectLocationAsync, addToRoute, removeFromRoute, unSelectLocationAsync, selectIsCustom } from '../store/reducers/attractionsSlice'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import icon from '../style/icons/down-left.png'



const LocationMarker = ({ onClick, location, idx ,Map}) => {
  const [popup, setPopup] = useState(false)
  const isCustom = useSelector(selectIsCustom)
  const dispatch = useDispatch()
  const showPopup = () => {
    setPopup(true)
  }


  return (
    <div>
      {popup &&
        <InfoWindow className="google-info-window"
          onCloseClick={() => setPopup(false)}
          position={{
            lat: location.lat + 0.1,
            lng: location.lng
          }}
        >
          <div className="location-marker-container">
            <div className="location-marker">
              <h5>{location.name}   <FontAwesomeIcon className="info-icon"
                onClick={() => dispatch(showModal(idx))} style={{ cursor: "pointer" }} icon={faInfoCircle} /> </h5>
              {isCustom === true && <div className="btn-groups">
                {location.isMarked && <Button onClick={async () => {
                  await dispatch(removeFromRoute(location))
                  await dispatch(unSelectLocationAsync(idx))
                  await setPopup(false)
                }}
                  variant="danger" > Remove waypoint</Button>}
                <Button variant={"success"}
                  onClick={async () => {
                    await dispatch(selectLocationAsync(idx))
                    await dispatch(addToRoute(location))
                    await setPopup(false)
                  }}
                >{'Add waypoint'}</Button>
              </div>}
            </div>
            <img src={location.img} alt={location.name} />
          </div>
        </InfoWindow>
      }
      <Marker
        position={{ lat: location.lat+0.15, lng: location.lng +0.2 }}
        icon={{
          url:icon,
        }}
        onMouseOver={() => showPopup()}
        onClick={() => {
          showPopup()
          onClick()
        }}
      />
    </div >
  )
}

export default LocationMarker
