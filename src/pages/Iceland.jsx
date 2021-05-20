import React, { useState } from 'react'
import IcelandHeader from '../cmps/IcelandHeader';
import Mask from '../cmps/Mask';
import { aroundIceland } from '../service/routeService'
import { setRoute } from '../store/reducers/attractionsSlice'
import Map from '../cmps/Map'
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { IcelandStyle } from '../cmps/mapStyles'
import Reviews from '../cmps/Reviews'

const Iceland = () => {
    const [card, setCard] = useState(false)
    const dispatch = useDispatch()
    const center = { lat: 64.96387075616835, lng: -18.676815850809533 }
    const zoom = { minZoom: 6, maxZoom: 7 }

  

    return (
        <main className="iceland-page">
            <IcelandHeader />
            <Mask />
            {!card &&
                <div>
                    <h1>POPULAR ROUTES</h1>
                    <div className="cards-container">
                        <div className="card"
                            onClick={async () => {
                                setCard(true)
                                dispatch(setRoute(aroundIceland))
                            }}>

                            <div className="img">
                                <li>ICELAND</li>
                            </div>
                            <div className="details">
                                <span className="in-middle-text">CLASSIC</span>
                                <h3>Around Iceland</h3>
                            </div>
                        </div>
                        <div className="card"
                            onClick={async () => {
                                setCard(true)
                                dispatch(setRoute([]))
                            }}>

                            <div className="img">
                                <li>ICELAND</li>
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
                        dispatch(setRoute(aroundIceland))
                    }} variant="primary">Around Iceland </Button>
                    <Button onClick={async () => {
                        setCard(true)
                        dispatch(setRoute([]))
                    }} variant="info">Custom</Button>
                </div>
                <Map center={center} zoom={zoom} styles={IcelandStyle} />
                <Reviews text={'around-iceland'}/>
            </div>}
        </main >
    )
}

export default Iceland
