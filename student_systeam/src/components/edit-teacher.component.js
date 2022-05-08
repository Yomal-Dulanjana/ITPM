import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditTeacher extends Component {

  constructor(props) {
    super(props)

    this.onChangeTeacherCid = this.onChangeTeacherCid.bind(this);
    this.onChangeTeacherFirst_name = this.onChangeTeacherFirst_name.bind(this);
    this.onChangeTeacherLast_name = this.onChangeTeacherLast_name.bind(this);
    this.onChangeTeacherDepartment = this.onChangeTeacherDepartment.bind(this);
    this.onChangeTeacherContac_No = this.onChangeTeacherContac_No.bind(this);
    this.onChangeTeacherEmail = this.onChangeTeacherEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      cid: '',
      first_name:'',
      last_name: '',
      department: '',
      contac_No: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/teachers/edit-teacher/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          cid: res.data.cid,
          first_name: res.data.first_name,
          last_name:res.data.last_name,
          department: res.data.department,
          contac_No: res.data.contac_No,
          email: res.data.email
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    department: this.state.department,
    contac_No: this.state.contac_No,
    email: this.state.email
  };

  axios.put('http://localhost:8070/teachers/update-teacher/' + this.props.match.params.id, teacherObject)
    .then((res) => {
      console.log(res.data)
      console.log('Teacher successfully updated')
    }).catch((error) => {
      console.log(error)
    })

  // Redirect to teacher List 
  this.props.history.push('/teacher-list')
}


render() {
  return (<div className="form-wrapper">
    <Form onSubmit={this.onSubmit}>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      &nbsp;&nbsp;<h3>Update Details</h3>    
    <Form.Group controlId="Cid">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text"  value={this.state.cid} onChange={this.onChangeTeacherCid}/>
      </Form.Group>

      <Form.Group controlId="Name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeTeacherFirst_name} />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeTeacherLast_name} />
      </Form.Group>

      <Form.Group controlId="User_type">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" value={this.state.department} onChange={this.onChangeTeacherDepartment} />
      </Form.Group>

      <Form.Group controlId="Contac_No">
        <Form.Label>Contac-No</Form.Label>
        <Form.Control type="number" value={this.state.contac_No} onChange={this.onChangeTeacherContac_No} />
      </Form.Group>

      <Form.Group controlId="Comment">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={this.state.email} onChange={this.onChangeTeacherEmail}  />
      </Form.Group>
      

      <br/>
      <Button variant="btn btn-success"  block="block" type="submit">
      <i class="far fa-comment-alt"></i>&nbsp;
        Update Details
      </Button>
    </Form>
  </div>);
}
}