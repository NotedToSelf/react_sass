import React from 'react';

const deleteStyle = {
    display: 'inline',
};

export const Delete = (props) => {
    return(
        <p style={deleteStyle} onClick={props.onDelete}> {'\u00d7'} </p>
    )

}