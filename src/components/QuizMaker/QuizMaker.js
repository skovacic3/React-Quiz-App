import React, { Component } from 'react';
import TitleCard from './TitleCard/TitleCard';
import QuestionMaker from './QuestionMaker/QuestionMaker'

class QuizMaker extends Component{
    state={
        title:"",
        questions:[],
        started:false,
        action: ""
    }

    handleTitleChange = (event) => {
        const title = event.target.value;
        this.setState({
            title: title
        })
    }

    handleStartClick = () => {
        if(this.state.title !== ""){
            this.setState({started:true})
        } 
    }

    handleSendClick = (correct, action, question) => {
        if(correct === ""){
            alert("choose a correct answer")
        }
        else{
            const questions = [...this.state.questions, question];
            this.setState({questions: questions, action: action});
        } 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.questions !== this.state.questions){
            if(this.state.action === "end"){
                this.props.sent({title:this.state.title, questions:this.state.questions});
            }
        }
    }

    render(){
        return(
            <div>
                {this.state.started ? 
                <QuestionMaker sendClick={this.handleSendClick} /> : 
                <TitleCard clicked={this.handleStartClick} changed={this.handleTitleChange} />
                }  
            </div>  
        ) 
    }
}

export default QuizMaker;