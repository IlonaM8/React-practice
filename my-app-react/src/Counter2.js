import React from 'react'

export const Counter2 = (props) =>(
     <button style={{color: 'red'}} onClick={props.incCount}>
        {props.count}
    </button>
);

