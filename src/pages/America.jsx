import React from 'react'
import AmericaHeader from '../cmps/AmericaHeader'
import Mask from '../cmps/Mask';
import { useDispatch } from 'react-redux';
import { setRoute, setCorinates } from '../store/reducers/attractionsSlice'
import { useState } from 'react'
import Map from '../cmps/Map'
import { americaStyle } from '../cmps/mapStyles'
import { Button } from 'react-bootstrap';
import { aroundAmerica } from '../service/routeService'
import Reviews from '../cmps/Reviews'

const America = () => {
    const [card, setCard] = useState(false)
    const dispatch = useDispatch()

    const center = { lat: 39.865879169849535, lng: -102.24695844712862 }
    const zoom = { minZoom: 4, maxZoom: 5 }

    return (
        <main className="america-page">
            <AmericaHeader />
            <Mask />
            {!card &&
                <div>
                    <h1>POPULAR ROUTES</h1>
                    <div className="cards-container">
                        <div className="card"
                            onClick={async () => {
                                dispatch(setRoute(aroundAmerica))
                                // dispatch(setCorinates(center))
                                setCard(true)
                            }}>
                            <div className="img">
                                <li>AMERICA</li>
                            </div>
                            <div className="details">
                                <span className="in-middle-text">CLASSIC</span>
                                <h3>Around? America</h3>
                            </div>
                        </div>
                        <div className="card"
                            onClick={async () => {
                                dispatch(setRoute([]))
                                dispatch(setCorinates(center))
                                setCard(true)
                            }}>
                            <div className="img">
                                <li>AMERICA</li>
                            </div>
                            <div className="details">
                                <span className="in-middle-text">UNIQUE</span>
                                <h3>Custom</h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {card && <div className="map-route-container">
                <div>
                    <Button onClick={async () => {
                        setCard(true)
                        dispatch(setRoute(aroundAmerica))
                        dispatch(setCorinates(center))
                    }} variant="primary">Around America </Button>
                    <Button onClick={async () => {

                        setCard(true)
                        dispatch(setCorinates(center))
                        dispatch(setRoute([]))
                    }} variant="info">Custom</Button>
                </div>
                <Map center={center} zoom={zoom} styles={americaStyle} />
                <Reviews text={'america'} />
            </div>}
        </main>
    )
}

export default America
