import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class QuizTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteQuiz = this.deleteQuiz.bind(this);
    }

    deleteQuiz() {
        axios.delete('http://localhost:8070/quizs/delete-quiz/' + this.props.obj._id)
            .then((res) => {
                alert('Quiz successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.question_number}</td>
                <td>{this.props.obj.question}</td>
                <td>{this.props.obj.answer_1}</td>
                <td>{this.props.obj.answer_2}</td>
                <td>{this.props.obj.answer_3}</td>
                <td>{this.props.obj.answer_4}</td>
                <td>{this.props.obj.corret_answer}</td>
            
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