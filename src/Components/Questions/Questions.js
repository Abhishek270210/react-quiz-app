import React from 'react'
import './Question.css';
import {Badge} from 'react-bootstrap'

const Questions = (props) => {
    return (
        <div>
            <h1>
                <Badge variant="secondary">Question No {props.questionNo}</Badge>
            </h1>
            <h1>{props.question}</h1>
        </div>
    )
}

export default Questions