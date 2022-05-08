import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateExam extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExamExam_Name = this.onChangeExamExam_Name.bind(this);
    this.onChangeExamSection = this.onChangeExamSection.bind(this);
    this.onChangeExamGrade= this.onChangeExamGrade.bind(this);
    this.onChangeExamYear = this.onChangeExamYear.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Exam_Name: '',
      section:'',
      grade: '',
      year: ''
      
    }
  }

  onChangeExamExam_Name(e) {
    this.setState({ Exam_Name: e.target.value })
  }

  onChangeExamSection(e) {
    this.setState({ section: e.target.value })
  }

  onChangeExamGrade(e) {
    this.setState({ grade: e.target.value })
  }

  onChangeExamYear(e) {
    this.setState({ year: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const examObject = {
      Exam_Name: this.state.Exam_Name,
      section: this.state.section,
      grade: this.state.grade,
      year: this.state.year
     
    };
    axios.post('http://localhost:8070/exams/create-exam', examObject)
      .then(res => console.log(res.data));

    this.setState({ Exam_Name: '', section: '', grade: '', year: '' })
    this.props.history.push('/exam-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      
      <br></br>
      <br></br>
      <br></br>
        &nbsp;&nbsp;<h2>Add Exam</h2>

        <Form.Group controlId="Exam_Name">
          <Form.Label>Exam Name</Form.Label>
          <Form.Control type="text" value={this.state.Exam_Name} onChange={this.onChangeExamExam_Name} required/>
        </Form.Group>

        <Form.Group controlId="Section">
          <Form.Label>Section</Form.Label>
          <Form.Control type="text" value={this.state.section} onChange={this.onChangeExamSection} required/>
        </Form.Group>

        <Form.Group controlId="Grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" value={this.state.grade} onChange={this.onChangeExamGrade} required />
        </Form.Group>

        <Form.Group controlId="Year">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" value={this.state.year} onChange={this.onChangeExamYear} required />
        </Form.Group>

         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Exam 
        </Button>
        
      </Form>
    </div>);
  }
}