import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentFirst_name = this.onChangeStudentFirst_name.bind(this);
    this.onChangeStudentLast_name = this.onChangeStudentLast_name.bind(this);
    this.onChangeStudentSection = this.onChangeStudentSection.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentIndex = this.onChangeStudentIndex.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
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

  componentDidMount() {
    axios.get('http://localhost:8070/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          section: res.data.section,
          email: res.data.email,
          phone: res.data.phone,
          index: res.data.index,
          dob: res.data.dob,
       
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:8070/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to student List 
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
        &nbsp;&nbsp;
        <Form.Group controlId="First_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.first_name} onChange={this.onChangeStudentFirst_name} />
        </Form.Group>
        <Form.Group controlId="Last_name">
          <Form.Label>Last className</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.last_name} onChange={this.onChangeStudentLast_name} />
        </Form.Group>

        <Form.Group controlId="Section">
          <Form.Label>Section</Form.Label>
          <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.section} onChange={this.onChangeStudentSection} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number"  value={this.state.phone} onChange={this.onChangeStudentPhone} />
        </Form.Group>

        <Form.Group controlId="Index">
          <Form.Label>Index Number</Form.Label>
          <Form.Control type="number" value={this.state.index} onChange={this.onChangeStudentIndex} />
        </Form.Group>

        <Form.Group controlId="Dob">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeStudentDob} />
        </Form.Group>


        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}