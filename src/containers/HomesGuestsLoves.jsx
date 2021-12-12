import React from "react";

import Heading from "../components/Heading";
import Hotels from "../components/Hotels";

const HomesGuestsLoves = () => {
    return (
        <div className='container'>
            <div className='homes'>
                <Heading headingText='Homes guests loves'/>
                <Hotels/>
            </div>

        </div>
    )
}
export default HomesGuestsLoves;
