import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditTime extends Component {

  constructor(props) {
    super(props)

    this.onChangeTimeDay = this.onChangeTimeDay.bind(this);
    this.onChangeTimeSubject = this.onChangeTimeSubject.bind(this);
    this.onChangeTimeClass = this.onChangeTimeClass.bind(this);
    this.onChangeTimeTeacher = this.onChangeTimeTeacher.bind(this);
    this.onChangeTimeTime = this.onChangeTimeTime.bind(this);
    this.onChangeTimeDate = this.onChangeTimeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        day: '',
        subject:'',
        class: '',
        teacher: '',
        time: '',
        date: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/time/edit-time/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          day: res.data.day,
          subject: res.data.subject,
          class: res.data.class,
          teacher: res.data.teacher,
          time: res.data.time,
          date: res.data.date
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:8070/time/update-time/' + this.props.match.params.id, timeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Time successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to time List 
    this.props.history.push('/time-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <br/><br/>
        &nbsp;<h1>STUDENT MANAGEMENT</h1><br/>
        &nbsp;&nbsp;<h3>Update Details</h3>
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
        <Button variant="outline-danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}