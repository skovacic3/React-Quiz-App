import React from 'react';
import './TitleCard.css';

const titleCard = props => {
    return(
        <div>
            <input onChange={props.changed} placeholder="Enter title" type="text"></input>
            <br/>
            <button onClick={props.clicked}>Start</button>
        </div>
    )
}

export default titleCard;