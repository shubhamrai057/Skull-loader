import React, { useState, useEffect } from 'react';
import { TextBlock, RectShape } from '../../loader/placeholders';

const BlogPlaceholder = React.memo(() => {
    return (
        <div className='my-placeholder'>
            <TextBlock rows={1} color='gray'/>
            <br />
            <RectShape color='gray' style={{width: 200, height: 200}} />
            <br />
            <TextBlock rows={1} color='gray'/>
        </div>
    )
})

export default BlogPlaceholder;