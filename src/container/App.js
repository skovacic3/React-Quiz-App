import React, { Component } from 'react';
import Quiz from '../components/Quiz/Quiz';
import QuizPicker from '../components/QuizPicker/QuizPicker';
import EndScreen from '../components/EndScreen/EndScreen';
import QuizMaker from '../components/QuizMaker/QuizMaker';
import './App.css';

class Main extends Component {

  state = {
    showing:"quiz",
    quizez:[
      {
        title:"Age Quiz",
        questions:[
          {
            question: "How old are you",
            answers:[
              "15","21","25"
            ],
            correct:"21"
          },
          {
            question: "How old is she",
            answers:[
              "15","20","25"
            ],
            correct:"20"
          }
        ]
      },
      {
        title:"Test Quiz",
        questions:[
          {
            question: "1+1",
            answers:[
              "15","2","25"
            ],
            correct:"2"
          },
          {
            question: "2+2",
            answers:[
              "4","20","25"
            ],
            correct:"4"
          },
          {
            question: "3+3",
            answers:[
              "9","6","3","5"
            ],
            correct:"6"
          }
        ]
      }
    ],
    quizHandler: {
      quizNum: null,
      questionNum:0,
      correctNum:0
    }
  }

  handleAnswer = (event) => {
    let questionNum = this.state.quizHandler.questionNum;
    let correctNum = this.state.quizHandler.correctNum;
    if(event.target.value === this.state.quizez[this.state.quizHandler.quizNum].questions[this.state.quizHandler.questionNum].correct){
      correctNum++;
    }
    questionNum++;
    this.setState( {
      quizHandler:{
        quizNum: this.state.quizHandler.quizNum,
        questionNum: questionNum,
        correctNum: correctNum
      }
    } )
    console.log(event.target.value)
  }

  handleQuizPick = (event) => {
    const quizNum = event.target.value;
    this.setState({
      quizHandler:{
        quizNum: quizNum,
        questionNum:0,
        correctNum:0
      }
    })
  }

  resetHandle = () => {
    this.setState({
      quizHandler:{
        quizNum: null,
        questionNum:0,
        correctNum:0
      }
    })
  }

  handleQuizSent = quiz => {
    const quizez = [...this.state.quizez, quiz];
    this.setState({quizez: quizez});
  }

  quizPickerCheck = () => {
    if(this.state.quizHandler.quizNum === null){
      return(
        <QuizPicker quizez={this.state.quizez} clicked={this.handleQuizPick}/>
      )
    }
    else{
      return(
      <div>
        {this.quizDoneCheck()}
      </div>
      )
    }
  }

  quizDoneCheck = () => {
    if(this.state.quizHandler.questionNum < this.state.quizez[this.state.quizHandler.quizNum].questions.length){
      return (
        <Quiz quiz={this.state.quizez[this.state.quizHandler.quizNum]} question={this.state.quizez[this.state.quizHandler.quizNum].questions[this.state.quizHandler.questionNum]} clicked={this.handleAnswer} />
      )
    }
    else{
      return (
        <EndScreen correct={this.state.quizHandler.correctNum} all={this.state.quizez[this.state.quizHandler.quizNum].questions.length} clicked={this.resetHandle} />
      )
    }
  }

  showingHandler = () => {
    if(this.state.showing === "quiz") {
      return (
        this.quizPickerCheck()
      )
    }
    else if(this.state.showing === "maker"){
      return (
        <>
          <QuizMaker sent={this.handleQuizSent}/>
          {this.state.quizez.map(quiz => <p>{quiz.title}</p>)}
        </>
      )
    }
  }

  clickHandler = event => {
    this.setState({showing : event.target.value})
  }

  render(){
    return (
      <div className="App">
        <nav>
          <button value={"quiz"} onClick={this.clickHandler}>Show existing quizez</button>
          <button value={"maker"} onClick={this.clickHandler}>Make new quiz</button>
        </nav>
        <br />
        <br />
        {this.showingHandler()}
      </div>
    );
  }
}

export default Main;
