import React from 'react';
import { Delete } from './Delete';


const rowStyle = {
    paddingTop: '1em',
}
//Should take row number, and message
export const Row = (props) => {
    return(
        <div style={rowStyle}>
            {props.number}. {props.message} <Delete/>
        </div>
    )
}