import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

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
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.index.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/students/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }



  render() {
    return (<div className="table-wrapper">
      <br/>
      <br/>
      <br/>
      <h2>&nbsp;STUDENT DETAILS</h2><br/>


      <form className="md-3">
     
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
        
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Section</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Index Number</th>
            <th>Date Of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-primary"><a href="/create-student" style={{textDecoration:'none',color:'white'}}> &nbsp;Add Student</a></button>
      &nbsp;
      &nbsp;
      <button className="btn btn-primary"><a href="/studentPDF" style={{textDecoration:'none',color:'white'}}> &nbsp;Genarate Report</a></button>

    
    </div>);
  }
}