import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

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
            
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}