import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MarkTableRow from "./MarkTableRow";

export default class MarkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returns: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/marks/")
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
      return <MarkTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm) {
    const result = returns.filter((list) =>
      list.studentID.includes(searchTerm)
    );
    this.setState({ returns: result });
  }

  handleTextSearch = (e) => {
    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8070/marks/").then((res) => {
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
          <i class="bi bi-question-circle"></i>&nbsp;MARKS
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
              <th>Marks</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
        <button className="btn btn-success">
          <a
            href="/create-mark"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <i class="fas fa-book"></i>&nbsp;Add Marks
          </a>
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-success"><a href="/marksPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>

      </div>
    );
  }
}
