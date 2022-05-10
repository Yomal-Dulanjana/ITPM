import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TeacherTableRow2 from './TeacherTableRow2';


export default class teacherPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:8070/teachers/')
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
      return <TeacherTableRow2 obj={res} key={i} />;
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
      <h2><i class="far fa-comment-alt"></i>&nbsp;Teacher's Details</h2><br/>
    


        <Table striped bordered hover variant="white">
       
        <thead>
          <tr>
          
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Contac-No</th>
            <th>Email</th>
            
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

