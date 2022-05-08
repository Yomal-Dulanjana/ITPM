import React, { Component } from 'react';
import axios from 'axios';


export default class ExamTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteExam = this.deleteExam.bind(this);
    }

    deleteExam() {
        axios.delete('http://localhost:8070/exams/delete-exam/' + this.props.obj._id)
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
                
               
            </tr>

        );
    }
}