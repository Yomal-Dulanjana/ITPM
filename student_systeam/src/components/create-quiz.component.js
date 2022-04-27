import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateQuiz extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeQuizQuestion_number = this.onChangeQuizQuestion_number.bind(this);
    this.onChangeQuizQuestion = this.onChangeQuizQuestion.bind(this);
    this.onChangeQuizAnswer_1 = this.onChangeQuizAnswer_1.bind(this);
    this.onChangeQuizAnswer_2 = this.onChangeQuizAnswer_2.bind(this);
    this.onChangeQuizAnswer_3 = this.onChangeQuizAnswer_3.bind(this);
    this.onChangeQuizAnswer_4 = this.onChangeQuizAnswer_4.bind(this);
    this.onChangeQuizCorret_answer = this.onChangeQuizCorret_answer.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      question_number:'',
      question:'',
      answer_1:'',
      answer_2:'',
      answer_3:'',
      answer_4:'',
      corret_answer:''
      
    }
  }

  onChangeQuizQuestion_number(e) {
    this.setState({ question_number: e.target.value })
  }

  onChangeQuizQuestion(e) {
    this.setState({ question: e.target.value })
  }

  onChangeQuizAnswer_1(e) {
    this.setState({ answer_1: e.target.value })
  }

  onChangeQuizAnswer_2(e) {
    this.setState({ answer_2: e.target.value })
  }
  
  onChangeQuizAnswer_3(e) {
    this.setState({ answer_3: e.target.value })
  }

  onChangeQuizAnswer_4(e) {
    this.setState({ answer_4: e.target.value })
  }

  onChangeQuizCorret_answer(e) {
    this.setState({ corret_answer: e.target.value })
  }

 
  onSubmit(e) {
    e.preventDefault()

    const quizObject = {
      question_number: this.state.question_number,
      question: this.state.question,
      answer_1: this.state.answer_1,
      answer_2: this.state.answer_2,
      answer_3: this.state.answer_3,
      answer_4: this.state.answer_4,
      corret_answer: this.state.corret_answer
     
    };
    axios.post('http://localhost:8070/quizs/create-quiz', quizObject)
      .then(res => console.log(res.data));

    this.setState({ question_number: '', question: '', answer_1: '', answer_2: '', answer_3: '', answer_4:'', corret_answer:'' })
    this.props.history.push('/quiz-list')
  }
  

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
        <br>
        </br>
        

      
        &nbsp;&nbsp;<h3>ADD QUESTION</h3>

        <Form.Group controlId="Question_number">
          <Form.Label>Question Number</Form.Label>
          <Form.Control type="number" value={this.state.question_number} onChange={this.onChangeQuizQuestion_number}  required />
        </Form.Group>

        <Form.Group controlId="Question">
          <Form.Label>Question</Form.Label>
          <Form.Control type="letters"  value={this.state.question} onChange={this.onChangeQuizQuestion}  required />
        </Form.Group>

        <Form.Group controlId="Answer_1">
          <Form.Label>Answer 01</Form.Label>
          <Form.Control type="letters"  value={this.state.answer_1} onChange={this.onChangeQuizAnswer_1}  required
           />
        </Form.Group>

        <Form.Group controlId="Answer_2">
          <Form.Label>Answer 02</Form.Label>
          <Form.Control type="letters" value={this.state.answer_2} onChange={this.onChangeQuizAnswer_2}  required />
        </Form.Group>

        <Form.Group controlId="Answer_3">
          <Form.Label>Answer 03</Form.Label>
          <Form.Control type="letters" value={this.state.answer_3} onChange={this.onChangeQuizAnswer_3}  required />
        </Form.Group>

        <Form.Group controlId="Answer 04">
          <Form.Label>Answer 04</Form.Label>
          <Form.Control type="letters" value={this.state.answer_4} onChange={this.onChangeQuizAnswer_4}  required />
        </Form.Group>

        <Form.Group controlId="Corret Answer">
          <Form.Label>Corret Answer</Form.Label>
          <Form.Control type="letters" value={this.state.corret_answer} onChange={this.onChangeQuizCorret_answer}  required />
        </Form.Group>

      
        
        <br/>
        <Button variant="success" size="lg" block="block" type="submit" > 
        <i class="fas fa-book"></i>&nbsp; Add Question
        </Button>
        
        <br>
        </br>
        <br>
        </br>

        
      </Form>
    </div>);
  }
}