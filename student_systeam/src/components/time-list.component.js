import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TimeTableRow from './TimeTableRow';


export default class TimeList extends Component {

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
      return <TimeTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.day.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/time/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }

  render() {
    return (<div className="table-wrapper">
    <br/><br/> 
    <br/>
     <h2><i class=""></i>&nbsp;Time Table</h2><br/>
    <form className="md-3">
          <input className="form-control " type="search" placeholder="Search" aria-label="Search"  style={{width: "670px"}}  onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;
    

    <Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject </th>
            <th>Class</th>
            <th>Teacher's Name</th>
            <th>Time</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-time" style={{textDecoration:'none',color:'white'}}><i class="fas fa-undo"></i>&nbsp;Add Time</a></button>
      &nbsp;
      &nbsp;
      <button className="btn btn-success"><a href="/timePDF" style={{textDecoration:'none',color:'white'}}><i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>
    </div>);
  }
}