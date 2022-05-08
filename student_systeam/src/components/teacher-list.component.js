import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TeacherTableRow from './TeacherTableRow';


export default class TeacherList extends Component {

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
      return <TeacherTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.cid.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:8070/teachers/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }




  render() {
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
      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;




        <Table striped bordered hover variant="dark">
       
        <thead>
          <tr>
          
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Contac-No</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-teacher" style={{textDecoration:'none',color:'white'}}> <i class="far fa-comment-alt"></i>&nbsp;Add Teacher</a></button>
      &nbsp;
      &nbsp;
      <button className="btn btn-success"><a href="/teacherPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>
    </div>);

  }
}
