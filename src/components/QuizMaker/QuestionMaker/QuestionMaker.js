import React, {Component} from 'react';
import "./QuestionMaker.css";

class questionMaker extends Component {

    state={
        question:"",
        answers: [],
        correct:"",
        answer:""
    }

    answerHandle = (event, index) => {
        let answer = event.target.value;
        this.setState({answer: answer})
    }

    questionHandle = (event) => {
        this.setState({question: event.target.value});
    }

    handleAdd = () => {
        const answers = [...this.state.answers, this.state.answer];
        this.setState({answers: answers,
        answer: ""});
        console.log(this.state.answers)
    }
    
    handleAddQuestion = () => {
        if(this.state.correct === ""){
            alert("Choose a correct answer");
        }
        else{
            this.props.sendClick("next",{question:this.state.question,
                answers:this.state.answers,
                correct:this.state.correct});
            this.setState({
                question:"",
                answers: [],
                correct:"",
                answer:""
            });
        }
    }

    handleCorrect = index => {
        this.setState({correct: this.state.answers[index]});
    }

    handleDelete = index => {
        const answers = [...this.state.answers];
        answers.splice(index,1);
        this.setState({answers: answers});
    }

    render(){
        return (
            <div>
                <input value={this.state.question} onChange={this.questionHandle} type="text" placeholder="Enter question" />
                <br />
                <input value={this.state.answer} onChange={this.answerHandle} type="text" placeholder="Enter answer" />
                <br />
                <button onClick={this.handleAdd}>+</button>
                <br />
                {this.state.answers.map(
                    (answer, index) => 
                    (<div>
                        <button onClick={() => this.handleDelete(index)} key={index} className="delete">-</button>
                        <p className="answers" key={index}>{answer}</p>                        
                        <input onChange={() => this.handleCorrect(index)} name="correct" value={index} type="radio"></input>
                    </div>)
                
                )}
                <br />
                <button onClick={this.handleAddQuestion}>Add question</button>
                <br />
                <button onClick={() => this.props.sendClick(this.state.correct,"end",{question:this.state.question,
                     answers:this.state.answers,
                     correct:this.state.correct})}>Save quiz</button>
            </div>
        )
    }
}

export default questionMaker;