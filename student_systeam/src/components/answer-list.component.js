import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import AnswerTableRow from "./AnswerTableRow";

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returns: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/answers/")
      .then((res) => {
        this.setState({
          returns: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <AnswerTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm) {
    const result = returns.filter((list) =>
      list.student_id.includes(searchTerm)
    );
    this.setState({ returns: result });
  }

  handleTextSearch = (e) => {
    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8070/answers/").then((res) => {
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm);
    });
  };

  render() {
    return (
      <div className="table-wrapper">
        <br />
        <br />
        <br />
        <h2>
          {" "}
          <i class="bi bi-question-circle"></i>&nbsp;STUDENT ANSWERS
        </h2>
        <br />
        <form className="md-3">
          <input
            className="form-control mt-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleTextSearch}
          ></input>
        </form>
        &nbsp;&nbsp;
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Q-Answer 01</th>
              <th>Q-Answer 02</th>
              <th>Q-Answer 03</th>
              <th>Q-Answer 04</th>
              <th>Q-Answer 05</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
        
        &nbsp; &nbsp;
        
      </div>
    );
  }
}
