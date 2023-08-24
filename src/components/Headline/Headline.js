import './Headline.css';
import React from 'react';

function Headline({heading}) {
    return (
        <div className='headline'>
            <h2 className='heading'>{heading}</h2>
        </div>
    )
}

export default Headline;