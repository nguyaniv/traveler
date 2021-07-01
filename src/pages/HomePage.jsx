import React from 'react'
import SelectMap from '../cmps/SelectMap'
import HomeHeader from '../cmps/HomeHeader'
import Stages from '../cmps/Stages'
const HomePage = () => {
    return (
        <main className="home-main" >
            <div className="main-home-container">
                <HomeHeader />
                <Stages />
                <SelectMap />
            </div>
        </main>
    )
}

export default HomePage
