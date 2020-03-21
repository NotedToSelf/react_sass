import React from 'react';

const rowStyle = {
    paddingTop: '1em',
}
//Should take row number, and message
export const Row = (props) => {
    return(
        <div style={rowStyle}>
            {props.number}. {props.message}
        </div>
    )
}