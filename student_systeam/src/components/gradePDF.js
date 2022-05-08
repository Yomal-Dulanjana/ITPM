import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import GradeTableRow2 from './GradeTableRow2';


export default class gradePDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:8070/grades/')
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
      return <GradeTableRow2 obj={res} key={i} />;
    });
  }

  render() {

    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper" style={{color:"#000000"}}>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <h2><i class="far fa-comment-alt"></i>&nbsp;Grading Details</h2><br/>
    


        <Table striped bordered hover variant="dark">
       
        <thead>
          <tr>
          
          <th>Index Number</th>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Section</th>
            <th>Subject 01</th>
            <th>Subject 02</th>
            <th>Subject 03</th>
            <th>Average</th>
            <th>Place</th>
            <th>Status</th>
            
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

