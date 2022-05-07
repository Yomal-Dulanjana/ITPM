import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class SubjectTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteSubject = this.deleteSubject.bind(this);
    }

    deleteSubject() {
        axios.delete('http://localhost:8070/subjects/delete-subject/' + this.props.obj._id)
            .then((res) => {
                alert('Subject successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.sname}</td>
                <td>{this.props.obj.scode}</td>
                <td>{this.props.obj.tname}</td>
                <td>{this.props.obj.class}</td>
                <td>{this.props.obj.language}</td>
                <td>
                    <Link className="edit-link" to={"/edit-subject/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                    &nbsp;  Edit
                    </Link>
                    &emsp;&emsp;
                    <Button onClick={this.deleteSubject} size="vh" variant="outline-danger">
                    <i class="far fa-trash-alt"></i>  
                       &nbsp; Delete</Button>
                </td>
            </tr>

        );
    }
}