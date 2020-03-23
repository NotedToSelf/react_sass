import React from 'react';
import './App.scss';

const labelStyle = {
    paddingRight: '3em',
}

export const Input = (props) => {
    return(
        <div>
            <label style={labelStyle} type="text">Enter A Task:</label>
            <textarea className={"textBox"} id="txtArea" onKeyDown={props.handler}></textarea>
        </div>
    )
}
