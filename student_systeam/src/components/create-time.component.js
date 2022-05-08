import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CreateTime extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTimeDay = this.onChangeTimeDay.bind(this);
    this.onChangeTimeSubject = this.onChangeTimeSubject.bind(this);
    this.onChangeTimeClass = this.onChangeTimeClass.bind(this);
    this.onChangeTimeTeacher = this.onChangeTimeTeacher.bind(this);
    this.onChangeTimeTime = this.onChangeTimeTime.bind(this);
    this.onChangeTimeDate = this.onChangeTimeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      day: '',
      subject:'',
      class: '',
      teacher: '',
      time: '',
      date: ''

    }
  }

  onChangeTimeDay(e) {
    this.setState({ day: e.target.value })
  }

  onChangeTimeSubject(e) {
    this.setState({ subject: e.target.value })
  }

  onChangeTimeClass(e) {
    this.setState({ class: e.target.value })
  }

  onChangeTimeTeacher(e) {
    this.setState({ teacher: e.target.value })
  }
  
  onChangeTimeTime(e) {
    this.setState({ time: e.target.value })
  }

  onChangeTimeDate(e) {
    this.setState({ date: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const timeObject = {
      day: this.state.day,
      subject: this.state.subject,
      class: this.state.class,
      teacher: this.state.teacher,
      time: this.state.time,
      date: this.state.date
    };
    axios.post('http://localhost:8070/time/create-time', timeObject)
      .then(res => console.log(res.data));

    this.setState({ day: '', subject: '', class: '', teacher: '', time: '', date: '' })
    this.props.history.push('/time-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
         <br/><br/>
     
        &nbsp;&nbsp;<h2>ADD NEW TIME</h2>
        <br/><br/><br/>
        <Form.Group controlId="Day">
          <Form.Label>Day</Form.Label>
          <Form.Control type="day" style={{width: "370px"}} value={this.state.day} onChange={this.onChangeTimeDay}  required />
        </Form.Group>

        <Form.Group controlId="Subject">
          <Form.Label>Subject Name</Form.Label>
          <Form.Control type="subject" style={{width: "370px"}} value={this.state.subject} onChange={this.onChangeTimeSubject}  required />
        </Form.Group>

        <Form.Group controlId="Class">
          <Form.Label>Class</Form.Label>
          <Form.Control type="class" style={{width: "370px"}} value={this.state.class} onChange={this.onChangeTimeClass}  required />
        </Form.Group>

        <Form.Group controlId="Teacher">
          <Form.Label>Teacher's Name</Form.Label>
          <Form.Control type="teacher" style={{width: "370px"}} value={this.state.teacher} onChange={this.onChangeTimeTeacher}  required />
        </Form.Group>

        <Form.Group controlId="Time">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" style={{width: "370px"}} value={this.state.time} onChange={this.onChangeTimeTime}  required />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" style={{width: "370px"}} value={this.state.date} onChange={this.onChangeTimeDate}  required />
        </Form.Group>


        <br/>
        <Button variant="outline-success" size="lg" block="block" type="submit">
        <i class="fa fa-plus-square" aria-hidden="true"></i>&nbsp; ADD TIME
        </Button>
        
      </Form>
    </div>);
  }
}