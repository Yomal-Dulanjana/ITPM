import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import QuizTableRow from "./QuizTableRow2";

export default class StudentQuiz extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStdStudent_ID = this.onChangeStdStudent_ID.bind(this);
    this.onChangeStdStudent_Name = this.onChangeStdStudent_Name.bind(this);
    this.onChangeStdAnswer_1 = this.onChangeStdAnswer_1.bind(this);
    this.onChangeStdAnswer_2 = this.onChangeStdAnswer_2.bind(this);
    this.onChangeStdAnswer_3 = this.onChangeStdAnswer_3.bind(this);
    this.onChangeStdAnswer_4 = this.onChangeStdAnswer_4.bind(this);
    this.onChangeStdAnswer_5 = this.onChangeStdAnswer_5.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      student_id:'',
      student_name:'',
      answer_1:'',
      answer_2:'',
      answer_3:'',
      answer_4:'',
      answer_5:''
     
    }

    this.state = {
        returns: [],
      };
    
  }

  onChangeStdStudent_ID(e) {
    this.setState({ student_id: e.target.value })
  }

  onChangeStdStudent_Name(e) {
    this.setState({ student_name: e.target.value })
  }

  onChangeStdAnswer_1(e) {
    this.setState({ answer_1: e.target.value })
  }

  onChangeStdAnswer_2(e) {
    this.setState({ answer_2: e.target.value })
  }
  
  onChangeStdAnswer_3(e) {
    this.setState({ answer_3: e.target.value })
  }

  onChangeStdAnswer_4(e) {
    this.setState({ answer_4: e.target.value })
  }

  onChangeStdAnswer_5(e) {
    this.setState({ answer_5: e.target.value })
  }

 
  onSubmit(e) {
    e.preventDefault()

    const StdObject = {
      student_id: this.state.student_id,
      student_name: this.state.student_name,
      answer_1: this.state.answer_1,
      answer_2: this.state.answer_2,
      answer_3: this.state.answer_3,
      answer_4: this.state.answer_4,
      answer_5: this.state.answer_5
     
    };
    axios.post('http://localhost:8070/answers/student-quiz', StdObject)
      .then(res => console.log(res.data));

    this.setState({ student_id: '', student_name: '', answer_1: '', answer_2: '', answer_3: '', answer_4:'', answer_5:'' })
    this.props.history.push('/home')
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/quizs/")
      .then((res) => {
        this.setState({
          returns: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <QuizTableRow obj={res} key={i} />;
    });
  }

  





  render() {
    return (
      <div className="table-wrapper">
        <br />
        <br />
        <br />
        <h2>
          {" "}
          <i class="bi bi-question-circle"></i>&nbsp;QUESTIONS
        </h2>
        <br />
        <form className="md-3"></form>
        &nbsp;&nbsp;
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Question</th>
              <th>Answer 01</th>
              <th>Answer 02</th>
              <th>Answer 03</th>
              <th>Answer 04</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>

        <Form onSubmit={this.onSubmit}>
        <br>
        </br>
        <br>
        </br>
        

      
        &nbsp;&nbsp;<h3>ADD ANSWER</h3>

        <Form.Group controlId="Student_ID">
          <Form.Label>Student ID</Form.Label>
          <Form.Control type="number" value={this.state.student_id} onChange={this.onChangeStdStudent_ID}  required />
        </Form.Group>

        <Form.Group controlId="Student_Name">
          <Form.Label>Student Name</Form.Label>
          <Form.Control type="letters" value={this.state.student_name} onChange={this.onChangeStdStudent_Name}  required />
        </Form.Group>

        <Form.Group controlId="Answer_1">
          <Form.Label>Answer 01</Form.Label>
          <Form.Control type="letters"  value={this.state.answer_1} onChange={this.onChangeStdAnswer_1}  required
           />
        </Form.Group>

        <Form.Group controlId="Answer_2">
          <Form.Label>Answer 02</Form.Label>
          <Form.Control type="letters" value={this.state.answer_2} onChange={this.onChangeStdAnswer_2}  required />
        </Form.Group>

        <Form.Group controlId="Answer_3">
          <Form.Label>Answer 03</Form.Label>
          <Form.Control type="letters" value={this.state.answer_3} onChange={this.onChangeStdAnswer_3}  required />
        </Form.Group>

        <Form.Group controlId="Answer_4">
          <Form.Label>Answer 04</Form.Label>
          <Form.Control type="letters" value={this.state.answer_4} onChange={this.onChangeStdAnswer_4}  required />
        </Form.Group>

        <Form.Group controlId="Answer_5">
          <Form.Label>Answer 05</Form.Label>
          <Form.Control type="letters" value={this.state.answer_5} onChange={this.onChangeStdAnswer_5} required   />
        </Form.Group>

      
        
        <br/>
        <Button variant="success" size="lg" block="block" type="submit" > 
        <i class="btn btn-primary"></i>Submit
        </Button>
        
        <br>
        </br>
        <br>
        </br>

        
      </Form>
      </div>

        


    );
  }
}
