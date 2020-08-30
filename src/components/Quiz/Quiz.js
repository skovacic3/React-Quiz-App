import React from 'react';
import './Quiz.css';

const quiz = props => {
    return(
        <div>
            <h1>{props.quiz.title}</h1>
            <h3>{props.question.question}</h3>
            {props.question.answers.map(
                (answer, index) => <button key={index} onClick={props.clicked} value={answer}>{answer}</button>
            )}
        </div>
    )
}

export default quiz;