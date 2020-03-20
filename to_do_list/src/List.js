import React, {useState} from 'react';
import { Row } from './Row';
import { Input } from './Input';

export const List = () => {
    return(
        <div>
            <div>
                <Input></Input>
            </div>
            <div>
                <Row number={1} message={'Do Laundry'}></Row>
                <Row number={2} message={'Eat Lunch'}></Row>
                <Row number={3} message={'Exercise'}></Row>
                <Row number={4} message={'Drink Water'}></Row>
            </div>
        </div>
    )

    function onDelete(i) {
        return;
    }
}