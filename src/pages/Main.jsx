import React, { useState, useEffect } from 'react';
import CardPlaceholder from '../components/placeHolderComponents/CardPlaceholder';
import BlogPlaceholder from '../components/placeHolderComponents/BlogPlaceholder';
import Skull from '../loader/Skull';
import Cards from '../components/Cards';
import Blogs from '../components/Blogs';

const Main = React.memo(() => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setTimeout(() => setReady(true), 5000)
    }, [])
    return (
        <div className='main'>
            <strong className='heading'>Card Placeholder Demo:</strong>
            <div className='box show-loading-animation'>
                <Skull ready={ready} customPlaceholder={<CardPlaceholder />}>
                    <Cards />
                </Skull>
            </div>
            <br /><br />
            <strong className='heading'>Blog Placeholder Demo:</strong>
            <div className='box show-loading-animation'>
                <Skull ready={ready} customPlaceholder={<BlogPlaceholder />}>
                    <Blogs />
                </Skull>
            </div>
        </div>
    )
})

export default Main;