import React from 'react';
import './circle.css';


const Circle = (props) => {
    return (
        <div className='circle'>
            {props.number}
        </div>
    )
};

export default Circle;