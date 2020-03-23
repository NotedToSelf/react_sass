import React, {useState} from 'react';
import { Row } from './Row';
import { Input } from './Input';
import { Delete } from './Delete';

const gridStyle = {
    display: 'grid'
}
const rowStyle = {

}
const rows = []
export const List = (props) => {

    const [count, updateCount] = useState(1);
    return(
         <div>
            <div>
                <Input handler={handleInput}></Input>
            </div>
            <div display={gridStyle}>
                {rows}
            </div>
        </div>
    )
 
    function handleInput(event) {
        if(event.key === "Enter") {
            updateCount(count + 1)
            const current = count;
            var message = document.getElementById("txtArea").value;
            document.getElementById("txtArea").value = "";
            console.log(message);
            rows.push(<div style={rowStyle}><Row key={current} number={current} message={message}></Row><Delete onClick={handleDeleteClick}></Delete></div>);
        }
    }

    //We can call the state hooks from inside a function, neat!
    function handleDeleteClick() {
        updateCount(count - 1)
    }
}