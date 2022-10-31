import React, { useState, useEffect } from 'react';
import { TextBlock, RectShape } from '../../loader/placeholders';

const CardPlaceholder = React.memo(() => {
    return (
        <div className='my-placeholder'>
            <RectShape color='gray' style={{width: 200, height: 200}} />
            <br />
            <TextBlock rows={2} color='gray'/>
        </div>
    )
})

export default CardPlaceholder;