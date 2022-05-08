import React, { Component } from 'react';
import axios from 'axios';


export default class TeacherTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTeacher = this.deleteTeacher.bind(this);
    }

    deleteTeacher() {
        axios.delete('http://localhost:8070/teachers/delete-teacher/' + this.props.obj._id)
            .then((res) => {
                alert('Teacher successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.cid}</td>
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.department}</td>
                <td>{this.props.obj.contac_No}</td>
                <td>{this.props.obj.email}</td>
                
               
            </tr>

        );
    }
}