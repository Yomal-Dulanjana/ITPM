import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ExamTableRow from './ExamTableRow';


export default class ExamList extends Component {

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
      return <ExamTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.Exam_Name.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/exams/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }




  render() {
    return (<div className="table-wrapper">
       <br></br>
      <br></br>
      <br></br>
      <h2><i class="fas fa-book"></i>&nbsp;Exam Details List</h2><br/>

      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>Section</th>
            <th>Grade</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-exam" style={{textDecoration:'none',color:'white'}}><i class="fas fa-book"></i>&nbsp;Add Exam Details</a></button>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <button className="btn btn-success"><a href="/examPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book">&nbsp;</i>Genarate Report</a></button>
    </div>);
  }
}