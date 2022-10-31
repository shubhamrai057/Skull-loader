import React, { useState, useEffect } from 'react';
import image from '../assets/images/pic.jpg'

const Cards = React.memo(() => {
    return (
        <div className='card'>
            <div className='card-container'>
                <img src={image} alt='' title='' className='image' />
                <div className='card-text'>Card Name</div>
                <span>Card Description....</span>
            </div>
        </div>
    )
})

export default Cards;