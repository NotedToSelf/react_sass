import React, {useState} from 'react';
import { Row } from './Row';
import { Input } from './Input';
import { Delete } from './Delete';

const rowStyle = {
    display: 'inline-flex',
    whiteSpace: 'nowrap'
};

export const List = (props) => {

    const [count, updateCount] = useState(1);
    return(

        <div>
            <div>
                <Input></Input>
            </div>
            <div style={rowStyle}>
                <Row number={count} message={'Do Laundry'}></Row><Delete onClick={handleDeleteClick}></Delete>
            </div>
        </div>
    )
 
    //We can call the state hooks from inside a function, neat!
    function handleDeleteClick() {
        updateCount(count - 1)
    }
}