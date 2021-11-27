import React from "react";

const Hotel = (props) => {
    return (
            <div className='homes__item'>
                <div className='homes__img-wrapper'>
                    <img src={props.imageUrl}/>
                </div>
                <span className='homes__aparts-name'>{props.name}</span>
                <span className='homes__aparts-location'>{props.city}</span>
            </div>
            )
}

export default Hotel;
