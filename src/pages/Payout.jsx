import React from 'react'
import PayoutHome from '../component/payout/PayoutHome'
import PayoutCard from '../component/payout/PayoutCard'
import ListImage from '../component/payout/ListImage'
import { GreenBox } from '../component/payout/GreenBox'
import StartUs from '../component/payout/StartUs'
import Strealine from '../component/payout/Strealine'
const Payout = () => {
    return (
        <div>
            <PayoutHome />
            <PayoutCard />
            <ListImage />
            <GreenBox />
            <StartUs />
            <Strealine />
        </div>
    )
}

export default Payout