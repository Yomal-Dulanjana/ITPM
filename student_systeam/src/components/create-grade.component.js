import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateGrade extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeGradeIndex_Num = this.onChangeGradeIndex_Num.bind(this);
    this.onChangeGradeStudent_Name = this.onChangeGradeStudent_Name.bind(this);
    this.onChangeGradeGrade= this.onChangeGradeGrade.bind(this);
    this.onChangeGradeSection= this.onChangeGradeSection.bind(this);
    this.onChangeGradeSubject_01= this.onChangeGradeSubject_01.bind(this);
    this.onChangeGradeSubject_02= this.onChangeGradeSubject_02.bind(this);
    this.onChangeGradeSubject_03= this.onChangeGradeSubject_03.bind(this);
    this.onChangeGradeAverage= this.onChangeGradeAverage.bind(this);
    this.onChangeGradePlace= this.onChangeGradePlace.bind(this);
    this.onChangeGradeStatus= this.onChangeGradeStatus.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Index_Num: '',
      Student_Name:'',
      grade: '',
      section: '',
      subject_01: '',
      subject_02: '',
      subject_03: '',
      average: '',
      place: '',
      status: ''
      
    }
  }

  onChangeGradeIndex_Num(e) {
    this.setState({ Index_Num: e.target.value })
  }

  onChangeGradeStudent_Name(e) {
    this.setState({ Student_Name: e.target.value })
  }

  onChangeGradeGrade(e) {
    this.setState({ grade: e.target.value })
  }

  onChangeGradeSection(e) {
    this.setState({ section: e.target.value })
  }

  onChangeGradeSubject_01(e) {
    this.setState({ subject_01: e.target.value })
  }

  onChangeGradeSubject_02(e) {
    this.setState({ subject_02: e.target.value })
  }

  onChangeGradeSubject_03(e) {
    this.setState({ subject_03: e.target.value })
  }

  onChangeGradeAverage(e) {
    this.setState({ average: e.target.value })
  }

  onChangeGradePlace(e) {
    this.setState({ place: e.target.value })
  }

  onChangeGradeStatus(e) {
    this.setState({ status: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const gradeObject = {
      Index_Num: this.state.Index_Num,
      Student_Name: this.state.Student_Name,
      grade: this.state.grade,
      section: this.state.section,
      subject_01: this.state.subject_01,
      subject_02: this.state.subject_02,
      subject_03: this.state.subject_03,
      average: this.state.average,
      place: this.state.place,
      status: this.state.status


     
    };
    axios.post('http://localhost:8070/grades/create-grade', gradeObject)
      .then(res => console.log(res.data));

    this.setState({ Index_Num: '', Student_Name: '', grade: '', section: '',subject_01: '',subject_02: '',subject_03: '',average: '',place: '',status: '' })
    this.props.history.push('/grade-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      
      <br></br>
      <br></br>
      <br></br>
        &nbsp;&nbsp;<h2>Add Grade</h2>

        <Form.Group controlId="Index_Num">
          <Form.Label>Index Number</Form.Label>
          <Form.Control type="text" value={this.state.Index_Num} onChange={this.onChangeGradeIndex_Num} required/>
        </Form.Group>

        <Form.Group controlId="Student_Name">
          <Form.Label>Student Name</Form.Label>
          <Form.Control type="text" value={this.state.Student_Name} onChange={this.onChangeGradeStudent_Name} required/>
        </Form.Group>

        <Form.Group controlId="Grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" value={this.state.grade} onChange={this.onChangeGradeGrade} required />
        </Form.Group>

        <Form.Group controlId="Section">
          <Form.Label>Section</Form.Label>
          <Form.Control type="text" value={this.state.section} onChange={this.onChangeGradeSection} required />
        </Form.Group>

        <Form.Group controlId="Subject_01">
          <Form.Label>Subject 01</Form.Label>
          <Form.Control type="text" value={this.state.subject_01} onChange={this.onChangeGradeSubject_01} required />
        </Form.Group>

        <Form.Group controlId="Subject_02">
          <Form.Label>Subject 02</Form.Label>
          <Form.Control type="text" value={this.state.subject_02} onChange={this.onChangeGradeSubject_02} required />
        </Form.Group>

        <Form.Group controlId="Subject_03">
          <Form.Label>Subject 03</Form.Label>
          <Form.Control type="text" value={this.state.subject_03} onChange={this.onChangeGradeSubject_03} required />
        </Form.Group>

        <Form.Group controlId="Average">
          <Form.Label>Average</Form.Label>
          <Form.Control type="text" value={this.state.average} onChange={this.onChangeGradeAverage} required/>
        </Form.Group>

        <Form.Group controlId="Place">
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" value={this.state.place} onChange={this.onChangeGradePlace} required />
        </Form.Group>

        <Form.Group controlId="Status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" value={this.state.status} onChange={this.onChangeGradeStatus} required/>
        </Form.Group>

         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Grade 
        </Button>
        
      </Form>
    </div>);
  }
}