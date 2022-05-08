import React, { Component } from 'react';
import axios from 'axios';


export default class GradeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteGrade = this.deleteGrade.bind(this);
    }

    deleteGrade() {
        axios.delete('http://localhost:8070/grades/delete-grade/' + this.props.obj._id)
            .then((res) => {
                alert('Grade successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.Index_Num}</td>
                <td>{this.props.obj.Student_Name}</td>
                <td>{this.props.obj.grade}</td>
                <td>{this.props.obj.section}</td>
                <td>{this.props.obj.subject_01}</td>
                <td>{this.props.obj.subject_02}</td>
                <td>{this.props.obj.subject_03}</td>
                <td>{this.props.obj.average}</td>
                <td>{this.props.obj.place}</td>
                <td>{this.props.obj.status}</td>
                
               
            </tr>

        );
    }
}