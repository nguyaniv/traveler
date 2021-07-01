/* global google */
import LocationMarker from './LocationMarker';
import React from 'react'
import { selectRoutes, selectAttractions, selectCordinates, setCorinates } from '../store/reducers/attractionsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import {
    GoogleMap, useJsApiLoader
} from '@react-google-maps/api';
import MyDirectionsRenderer from './MyDirectionsRenderer';

const Map = ({ styles, center, zoom }) => {
    const [, setLoading] = useState(true)
    const attractions = useSelector(selectAttractions);
    const cordinates = useSelector(selectCordinates);
    const dispatch = useDispatch()
    const [map, setMap] = useState(null)
    const [currentZoom,setCurrentZoom] = useState(null)
    const [error, setError] = useState(null);
    const centerLocation = (location) => {
        dispatch(setCorinates(location))
    }

    const routes = useSelector(selectRoutes)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,

    })
    const containerStyle = {
        width: window.innerWidth > 500 ? '40vw' : '100vw',
        height: '750px'
    };
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onLoad = React.useCallback(async function callback(map) {
        const bounds = await new window.google.maps.LatLngBounds({ lat: center.lat, lng: center.lng });

        try {
            await setLoading(true)
            await map.fitBounds(bounds);
            await setMap(map)
            await setLoading(false)
        }
        catch {
            setError(true)
        }
    }, [center])

    if (error) return <h1>{error}</h1>
    const option = {
        styles,
        maxZoom: zoom.maxZoom,
        minZoom: zoom.minZoom,
        disableDefaultUI: true,
    }
    async function handleZoomChanged() {
        await setCurrentZoom(this.getZoom());
    }




    return isLoaded && cordinates ? (
        <div className="map">
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                center={cordinates}
                options={option}
                onUnmount={onUnmount}
                onZoomChanged={handleZoomChanged}
                zoom={4}
            >
                {routes && routes.length > 0 && (
                    <MyDirectionsRenderer
                        travelMode={google.maps.TravelMode.DRIVING}
                        routes={routes}
                    />
                )}
                {attractions && attractions.map((location, idx) =>
                    < LocationMarker
                    currentZoom={currentZoom}
                        key={idx}
                        isPopup={location.isPopup}
                        location={location}
                        idx={idx}
                        onClick={async () => {
                            await centerLocation(location)
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    )
        : <></>
}
export default React.memo(Map)