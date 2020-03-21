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
            <p>{count}</p>
            <div>
                <Input></Input>
            </div>
            <div style={rowStyle}>
                <Row number={1} message={'Do Laundry'}></Row><Delete onClick={() => updateCount(count - 1)}></Delete>
            </div>
        </div>
    )

}