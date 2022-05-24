import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import GradeTableRowStudent from './GradeTableRowStudent';


export default class GradeList extends Component {

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
      return <GradeTableRowStudent obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.Index_Num.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/grades/')
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
      <h2><i class="fas fa-graduation-cap"></i>&nbsp;Grade Details List</h2><br/>

      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;

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
            <th></th>

            
            <br></br>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}