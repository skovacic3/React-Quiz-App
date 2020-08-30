import React from 'react';

const endScreen = props => {
    return(
        <div className="endScreen">
                <p>{props.correct}/{props.all}</p>
              <button onClick={props.clicked}>reset</button>
        </div>
    )
    
}

export default endScreen;