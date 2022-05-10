import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export default class AnswerTableRow extends Component {

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
                
                <td>{this.props.obj.student_id}</td>
                <td>{this.props.obj.student_name}</td>
                <td>{this.props.obj.answer_1}</td>
                <td>{this.props.obj.answer_2}</td>
                <td>{this.props.obj.answer_3}</td>
                <td>{this.props.obj.answer_4}</td>
                <td>{this.props.obj.answer_5}</td>
                
                <td>
                    <Link className="edit-link" to={"/create-mark/" + this.props.obj._id}>
                    <Button type="button" class="btn btn-success">Add Marks</Button>
                    </Link>
                   
                </td>
            
               
            </tr>

        );
    }
}