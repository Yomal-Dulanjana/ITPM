import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MarkTableRow2 from "./MarkTableRow2";

export default class markPDF extends Component {
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
      return <MarkTableRow2 obj={res} key={i} />;
    });
  }

  
  render() {

    function printPage(){
        window.print();
    }
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
        
        &nbsp;&nbsp;
        <Table striped bordered hover variant="#000000">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Marks</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
        <button onClick= {printPage}>Print</button>
      </div>
    );
  }
}
