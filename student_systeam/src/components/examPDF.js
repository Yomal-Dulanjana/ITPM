import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ExamTableRow2 from './ExamTableRow2';


export default class examPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:8070/exams/')
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
      return <ExamTableRow2 obj={res} key={i} />;
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
      <h2><i class="far fa-comment-alt"></i>&nbsp;Exam Details</h2><br/>
    


        <Table striped bordered hover variant="white">
       
        <thead>
          <tr>
          
          <th>Exam Name</th>
            <th>Section</th>
            <th>Grade</th>
            <th>Year</th>
            
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

