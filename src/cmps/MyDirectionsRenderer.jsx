/* global google */
import { DirectionsRenderer, InfoWindow } from '@react-google-maps/api';
import { selectRoutes, selectIsCustom } from '../store/reducers/attractionsSlice'
import { useSelector } from 'react-redux'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const MyDirectionsRenderer = (props) => {
    const [directions, setDirections] = useState(null);
    const [isAlternativeWay, setIsAlternativeWay] = useState(false)
    const routes = useSelector(selectRoutes)
    const isCustom = useSelector(selectIsCustom)
    const { travelMode } = props;
    const [isInstructionsHidden, setisInstructionsHidden] = useState(false)

    useEffect(() => {
        const directionsService = new google.maps.DirectionsService();
        const routesCopy = routes.map((route) => {
            return {
                location: { lat: route.location.lat, lng: route.location.lng },
                stopover: true,
            }
        })
        const origin = routes.length === 1 ? new google.maps.LatLng(routesCopy[0].location.lat, routesCopy[0].location.lng) : routesCopy.shift().location
        const destination = routes.length === 1 ? new google.maps.LatLng(routesCopy[0].location.lat, routesCopy[0].location.lng) : routesCopy.pop().location
        const waypoints = routes.length === 2 || routes.length === 1 ? [] : routesCopy
        directionsService.route(
            {
                origin,
                destination,
                travelMode,
                waypoints,
                optimizeWaypoints: isAlternativeWay,
                unitSystem: google.maps.UnitSystem.METRIC,

            },
            async (result, status) => {

                if (status === google.maps.DirectionsStatus.OK) {
                    await setDirections(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        )

    }, [routes, travelMode, isAlternativeWay]);
    return (
        <React.Fragment>
            {directions && <DirectionsRenderer
                options={{
                    suppressMarkers: false,
                    suppressInfoWindows: false
                }}
                markerOptions={{
                    clickable: true,
                    zIndex: 3
                }}




                panel={document.querySelector('.right-panel')}
                directions={directions} />}
            <div className="right-panel-container">
                {!isInstructionsHidden && <Button variant="outline-light" onClick={() => setisInstructionsHidden(true)}>Show Route</Button>}
                {isInstructionsHidden && <Button variant="outline-dark" onClick={() => setisInstructionsHidden(false)}>Hide Route</Button>}
                <div className={isInstructionsHidden ? "right-panel" : 'right-panel hidden'}>
                </div>
            </div>
            {isCustom &&
                <div className="alternative-way">
                    <h5>Optimize Route</h5>
                    <div >
                        {isAlternativeWay && <Button onClick={() => setIsAlternativeWay(false)} variant="success">Enabled</Button>}
                        {!isAlternativeWay && <Button onClick={() => setIsAlternativeWay(true)} variant="secondary">Disabled</Button>}
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default MyDirectionsRenderer

