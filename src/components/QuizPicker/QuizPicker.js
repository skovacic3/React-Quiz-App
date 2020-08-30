import React from 'react';

const quizPicker = props => {
    return(
        props.quizez.map(
            (quiz,index) => <button key={index} onClick={props.clicked} value={index}>{quiz.title}</button>
        )
    )
}

export default quizPicker;