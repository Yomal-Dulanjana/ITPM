import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentFirst_name = this.onChangeStudentFirst_name.bind(this);
    this.onChangeStudentLast_name = this.onChangeStudentLast_name.bind(this);
    this.onChangeStudentSection = this.onChangeStudentSection.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentIndex = this.onChangeStudentIndex.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      first_name:'',
      last_name:'',
      section:'',
      email:'',
      phone:'',
      index:'',
      dob:''
      
    }
  }

  onChangeStudentFirst_name(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeStudentLast_name(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeStudentSection(e) {
    this.setState({ section: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeStudentIndex(e) {
    this.setState({ index: e.target.value })
  }
  
  onChangeStudentDob(e) {
    this.setState({ dob : e.target.value })
  }

 
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      section: this.state.section,
      email: this.state.email,
      phone: this.state.phone,
      index: this.state.index,
      dob: this.state.dob
     
    };
    axios.post('http://localhost:8070/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({ first_name: '', last_name: '', section: '', email: '', phone: '', index: '', dob: '' })
    this.props.history.push('/student-list')
  }
  

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br>
        </br>
        <br>
        </br>
        

      
        &nbsp;&nbsp;<h3>Fill Details</h3>

        <Form.Group controlId="Card_number">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.first_name} onChange={this.onChangeStudentFirst_name}  required />
        </Form.Group>

        <Form.Group controlId="Type">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.last_name} onChange={this.onChangeStudentLast_name}  required />
        </Form.Group>

        <Form.Group controlId="Holders_name">
          <Form.Label>Section</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.section} onChange={this.onChangeStudentSection}  required
           />
        </Form.Group>

        <Form.Group controlId="Holders_name">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}  required
           />
        </Form.Group>

        <Form.Group controlId="Holders_name">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number"  value={this.state.phone} onChange={this.onChangeStudentPhone}  required
           />
        </Form.Group>

        <Form.Group controlId="Cvv">
          <Form.Label>Index Number</Form.Label>
          <Form.Control type="number" value={this.state.index} onChange={this.onChangeStudentIndex}  required />
        </Form.Group>

        <Form.Group controlId="Expiry_date">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeStudentDob}  required />
        </Form.Group>

      
        
        <br/>
        <Button variant="btn btn-primary" block="block" type="submit">
        <i class="far fa-comment-alt"></i>&nbsp; ADD STUDENT
        </Button>
        
        <br>
        </br>
        <br>
        </br>

        
      </Form>
    </div>);
  }
}