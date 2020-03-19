import React from 'react';

//Should take row number, and message
export const Row = (props) => {
    return(
        <div>
            <p>{props.number}. {props.message}</p>
        </div>
    )
}