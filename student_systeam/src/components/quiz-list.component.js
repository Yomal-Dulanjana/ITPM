import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import QuizTableRow from "./QuizTableRow";

export default class QuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returns: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/quizs/")
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
      return <QuizTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm) {
    const result = returns.filter((list) =>
      list.question_number.includes(searchTerm)
    );
    this.setState({ returns: result });
  }

  handleTextSearch = (e) => {
    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8070/quizs/").then((res) => {
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
          <i class="bi bi-question-circle"></i>&nbsp;QUESTIONS
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
              <th>Question Number</th>
              <th>Question</th>
              <th>Answer 01</th>
              <th>Answer 02</th>
              <th>Answer 03</th>
              <th>Answer 04</th>
              <th>Corret Answer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
        <button className="btn btn-success">
          <a
            href="/create-quiz"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <i class="fas fa-book"></i>&nbsp;Add Question
          </a>
        </button>
        &nbsp; &nbsp;
        
      </div>
    );
  }
}
