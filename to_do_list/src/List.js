import React from 'react';
import { Row } from "./Row"

export const List = () => {
    return(
        <div>
            <Row number={1} message={'Do Laundry'}></Row>
            <Row number={2} message={'Eat Lunch'}></Row>
            <Row number={3} message={'Exercise'}></Row>
        </div>
    )

}