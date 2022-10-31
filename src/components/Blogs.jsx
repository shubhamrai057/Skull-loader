import React, { useState, useEffect } from 'react';
import image from '../assets/images/pic.jpg'

const Blogs = React.memo(() => {
    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-text'>Blog Name</div>
                <img src={image} alt='' title='' className='image' />
                <span>Blog Description....</span>
            </div>
        </div>
    )
})

export default Blogs;