import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditExam extends Component {

  constructor(props) {
    super(props)

    this.onChangeExamExam_Name = this.onChangeExamExam_Name.bind(this);
    this.onChangeExamSection = this.onChangeExamSection.bind(this);
    this.onChangeExamGrade = this.onChangeExamGrade.bind(this);
    this.onChangeExamYear = this.onChangeExamYear.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      Exam_Name: '',
      section:'',
      grade: '',
      year: ''
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/exams/edit-exam/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Exam_Name: res.data.Exam_Name,
         section: res.data.section,
          grade: res.data.grade,
          year: res.data.year
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:8070/exams/update-exam/' + this.props.match.params.id, examObject)
      .then((res) => {
        console.log(res.data)
        console.log('Exam successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to customer List 
    this.props.history.push('/exam-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br></br>
        <br></br>
      &nbsp;&nbsp;<h2>Update Details</h2>
      <br></br>
      <Form.Group controlId="Exam_Name">
          <Form.Label>Exam Name</Form.Label>
          <Form.Control type="trxt" value={this.state.Exam_Name} onChange={this.onChangeExamExam_Name} />
        </Form.Group>

        <Form.Group controlId="section">
          <Form.Label>Section</Form.Label>
          <Form.Control type="text" value={this.state.section} onChange={this.onChangeExamSection} />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" value={this.state.grade} onChange={this.onChangeExamGrade} />
        </Form.Group>

        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" value={this.state.year} onChange={this.onChangeExamYear} />
        </Form.Group>

      

        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}