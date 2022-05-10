import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CreateSubject extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeSubjectSname = this.onChangeSubjectSname.bind(this);
    this.onChangeSubjectScode = this.onChangeSubjectScode.bind(this);
    this.onChangeSubjectTname = this.onChangeSubjectTname.bind(this);
    this.onChangeSubjectClass = this.onChangeSubjectClass.bind(this);
    this.onChangeSubjectLanguage = this.onChangeSubjectLanguage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      sname: '',
      scode:'',
      tname: '',
      class: '',
      language: ''

    }
  }

  onChangeSubjectSname(e) {
    this.setState({ sname: e.target.value })
  }

  onChangeSubjectScode(e) {
    this.setState({ scode: e.target.value })
  }

  onChangeSubjectTname(e) {
    this.setState({ tname: e.target.value })
  }

  onChangeSubjectClass(e) {
    this.setState({ class: e.target.value })
  }
  
  onChangeSubjectLanguage(e) {
    this.setState({ language: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const subjectObject = {
      sname: this.state.sname,
      scode: this.state.scode,
      tname: this.state.tname,
      class: this.state.class,
      language: this.state.language
    };
    axios.post('http://localhost:8070/subjects/create-subject', subjectObject)
      .then(res => console.log(res.data));

    this.setState({ sname: '', scode: '', tname: '', class: '', language: '' })
    this.props.history.push('/subject-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
         <br/><br/>
     
        &nbsp;&nbsp;<h2>ADD NEW SUBJECT</h2>

        <Form.Group controlId="Sname">
          <Form.Label>Subject Name</Form.Label>
          <Form.Control type="sname" style={{width: "370px"}} value={this.state.sname} onChange={this.onChangeSubjectSname}  required />
        </Form.Group>

        <Form.Group controlId="Scode">
          <Form.Label>Subject Code</Form.Label>
          <Form.Control type="scode" style={{width: "370px"}} value={this.state.scode} onChange={this.onChangeSubjectScode}  required />
        </Form.Group>

        <Form.Group controlId="Tname">
          <Form.Label>Teacher's Name</Form.Label>
          <Form.Control type="tname" style={{width: "370px"}} value={this.state.tname} onChange={this.onChangeSubjectTname}  required />
        </Form.Group>

        <Form.Group controlId="Class">
          <Form.Label>Class</Form.Label>
          <Form.Control type="class" style={{width: "370px"}} value={this.state.class} onChange={this.onChangeSubjectClass}  required />
        </Form.Group>

        <Form.Group controlId="Language">
          <Form.Label>Language</Form.Label>
          <Form.Control type="language" style={{width: "370px"}} value={this.state.language} onChange={this.onChangeSubjectLanguage}  required />
        </Form.Group>


        <br/>
        <Button variant="outline-success" size="lg" block="block" type="submit">
        <i class="fa fa-book" aria-hidden="true"></i>&nbsp; ADD SUBJECTS
        </Button>
        
      </Form>
    </div>);
  }
}