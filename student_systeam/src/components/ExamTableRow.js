import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ExamTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteExam = this.deleteExam.bind(this);
    }

    deleteExam() {
        axios.delete('http://localhost:8070/Exams/delete-exam/' + this.props.obj._id)
            .then((res) => {
                alert('Exam successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.Exam_Name}</td>
                <td>{this.props.obj.section}</td>
                <td>{this.props.obj.grade}</td>
                <td>{this.props.obj.year}</td>
               
                <td>
                    <Link className="edit-link" to={"/edit-exam/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteExam} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i>
                        Delete</Button>
                </td>
            </tr>

        );
    }
}