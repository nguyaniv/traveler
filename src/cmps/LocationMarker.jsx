

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Marker, InfoWindow } from '@react-google-maps/api'
import { showModal, selectLocationAsync, addToRoute, removeFromRoute, unSelectLocationAsync, selectIsCustom,showPopup } from '../store/reducers/attractionsSlice'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import icon from '../style/icons/down-left.png'



const LocationMarker = ({ onClick, location, idx, Map, currentZoom }) => {
  const [popup, setPopup] = useState(false)
  const isCustom = useSelector(selectIsCustom)
  const dispatch = useDispatch()
  const [zoomLat, setZoomLat] = useState(null)
  const [zoomLng, setZoomLng] = useState(null)
  const showPopup = () => {
    setPopup(true)
  }
  useEffect(() => {
    switch (currentZoom) {
      case 7:
        setZoomLat(0.15)
        setZoomLng(0.2)
        break;
      case 6:
        setZoomLat(0.35)
        setZoomLng(0.35)
        break;
      case 4:
        setZoomLat(2.7)
        setZoomLng(1.5)
        break;
      case 5:
        setZoomLat(1.35)
        setZoomLng(0.75)
        break;

      default:
        break;
    }
  }, [currentZoom])
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
                onClick={() => dispatch(showModal(location))} style={{ cursor: "pointer" }} icon={faInfoCircle} /> </h5>
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
        position={{ lat: location.lat + zoomLat, lng: location.lng + zoomLng }
        }
        icon={{
          url: icon,
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
