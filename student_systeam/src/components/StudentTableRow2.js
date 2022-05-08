import React, { Component } from 'react';
import axios from 'axios';


export default class StudentTableRow2 extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                alert('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
              <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.section}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.index}</td>
                <td>{this.props.obj.dob}</td>
        
            </tr>

        );
    }
}