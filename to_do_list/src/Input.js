import React from 'react';

const textArea = {
    height: '1em',
    width: '20em'
};

const labelStyle = {
    paddingRight: '3em',
}

export const Input = () => {
    return(
        <div>
            <label style={labelStyle} type="text">Enter A Task:</label>
            <textarea style={textArea} id="txtArea" onKeyDown={onEnter}></textarea>
        </div>
    )

    function onEnter(event) {
        if(event.key === "Enter") {
            console.log("Hit Enter")
        }
    }
}
