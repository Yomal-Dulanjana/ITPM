import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditMark extends Component {
  constructor(props) {
    super(props);

    this.onChangeMarkStudentID = this.onChangeMarkStudentID.bind(this);
    this.onChangeMarkName = this.onChangeMarkName.bind(this);
    this.onChangeMarkMarks = this.onChangeMarkMarks.bind(this);
    this.onChangeMarkStatus = this.onChangeMarkStatus.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      studentID: "",
      name: "",
      marks: "",
      status: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8070/marks/edit-mark/" + this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          studentID: res.data.studentID,
          name: res.data.name,
          marks: res.data.marks,
          status: res.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeMarkStudentID(e) {
    this.setState({ studentID: e.target.value });
  }

  onChangeMarkName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeMarkMarks(e) {
    this.setState({ marks: e.target.value });
  }

  onChangeMarkStatus(e) {
    this.setState({ status: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const markObject = {
      studentID: this.state.studentID,
      name: this.state.name,
      marks: this.state.marks,
      status: this.state.status,
    };

    axios
      .put(
        "http://localhost:8070/marks/update-mark/" + this.props.match.params.id,
        markObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("mark successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to return List
    this.props.history.push("/mark-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <br></br>
          <br></br>
          &nbsp;&nbsp;<h3>ADD MARKS</h3>
          <Form.Group controlId="StudentID">
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="number"
              value={this.state.studentID}
              onChange={this.onChangeMarkStudentID}
              required
            />
          </Form.Group>
          <Form.Group controlId="Question">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="letters"
              value={this.state.name}
              onChange={this.onChangeMarkName}
              required
            />
          </Form.Group>
          <Form.Group controlId="Answer_1">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="letters"
              value={this.state.marks}
              onChange={this.onChangeMarkMarks}
              required
            />
          </Form.Group>
          <Form.Group controlId="Answer_2">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="letters"
              value={this.state.status}
              onChange={this.onChangeMarkStatus}
              required
            />
          </Form.Group>
          <br />
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Marks
          </Button>
        </Form>
      </div>
    );
  }
}
