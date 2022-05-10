import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TimeTableRow2 from './TimeTableRow2';
import Button from 'react-bootstrap/Button';


export default class timePDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/time/')
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
      return <TimeTableRow2 obj={res} key={i} />;
    });
  }


  render() {
    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper">
    <br/><br/> 
    <br/>
     <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Table Details</h2><br/>
    
    

    <Table striped bordered hover variant="white">
      
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject </th>
            <th>Class</th>
            <th>Teacher's Name</th>
            <th>Time</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <Button variant="outline-success" size="lg" block="block" type="submit" onClick= {printPage}>Print</Button>
 
    </div>);
  }
}