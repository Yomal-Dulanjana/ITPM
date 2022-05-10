import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateTeacher extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTeacherCid = this.onChangeTeacherCid.bind(this);
    this.onChangeTeacherFirst_name = this.onChangeTeacherFirst_name.bind(this);
    this.onChangeTeacherLast_name = this.onChangeTeacherLast_name.bind(this);
    this.onChangeTeacherDepartment = this.onChangeTeacherDepartment.bind(this);
    this.onChangeTeacherContac_No = this.onChangeTeacherContac_No.bind(this);
    this.onChangeTeacherEmail = this.onChangeTeacherEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      cid: '',
      first_name:'',
      last_name: '',
      department: '',
      contac_No: '',
      email: ''
    }
  }

  onChangeTeacherCid(e) {
    this.setState({ cid: e.target.value })
  }

  onChangeTeacherFirst_name(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeTeacherLast_name(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeTeacherDepartment(e) {
    this.setState({ department: e.target.value })
  }
  
  onChangeTeacherContac_No(e) {
    this.setState({ contac_No: e.target.value })
  }

  onChangeTeacherEmail(e) {
    this.setState({ email: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const teacherObject = {
      cid:this.state.cid,
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      department:this.state.department,
      contac_No:this.state.contac_No,
      email:this.state.email
      
    };
    axios.post('http://localhost:8070/teachers/create-teacher', teacherObject)
      .then(res => console.log(res.data));

    this.setState({ cid: '', first_name: '', last_name: '', department: '', contac_No: '', email: '' })
    this.props.history.push('/teacher-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        
<br>
</br>
<br>
</br>
        &nbsp;&nbsp;<h3>ADD TEACHER</h3>
        <Form.Group controlId="Cid">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text"  value={this.state.cid} onChange={this.onChangeTeacherCid} required />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeTeacherFirst_name}  required  />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeTeacherLast_name}  required />
        </Form.Group>

        <Form.Group controlId="User_type">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" value={this.state.department} onChange={this.onChangeTeacherDepartment}  required />
        </Form.Group>

        <Form.Group controlId="Contac_No">
          <Form.Label>Contac-No</Form.Label>
          <Form.Control type="number" value={this.state.contac_No} onChange={this.onChangeTeacherContac_No}  required />
        </Form.Group>

        <Form.Group controlId="Comment">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeTeacherEmail}  required />
        </Form.Group>
         
        <br/>
        <Button variant="btn btn-success" block="block" type="submit">
        <i class="far fa-comment-alt"></i>&nbsp; Add Teacher
        </Button>
      
        </Form>
    </div>);
  }
}