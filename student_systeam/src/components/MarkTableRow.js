import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MarkTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteQuiz = this.deleteQuiz.bind(this);
    }

    deleteQuiz() {
        axios.delete('http://localhost:8070/marks/delete-mark/' + this.props.obj._id)
            .then((res) => {
                alert('Mark successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.studentID}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.marks}</td>
                <td>{this.props.obj.status}</td>
            
                <td>
                    <Link className="edit-link" to={"/edit-quiz/" + this.props.obj._id}>
                    <Button type="button" class="btn btn-success">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteQuiz} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i> 
                        Delete</Button>
                </td>
            </tr>

        );
    }
}