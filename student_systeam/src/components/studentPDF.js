import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow2 from './StudentTableRow2';


export default class studentPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/students/')
      .then(res => {
        this.setState({
          returns: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <StudentTableRow2 obj={res} key={i} />;
    });
  }


  
  render() {
    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper">
      <br/>
      <br/>
      <br/>
      <h2>&nbsp;Student details</h2><br/>


      

        <Table striped bordered hover variant="white">
      
        <thead>
          <tr>
          <th>First Name</th>
            <th>Last Name</th>
            <th>Section</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Index Number</th>
            <th>Date Of Birth</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button onClick= {printPage}>Print</button>
    </div>);
  }
}