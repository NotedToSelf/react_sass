import React from 'react';

export const Delete = (props) => {
    return(
        <div onClick={props.onClick}>
            <p> {'\u00d7'} </p>
        </div>
    )

}