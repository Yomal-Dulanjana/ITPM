import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class TimeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTime = this.deleteTime.bind(this);
    }

    deleteTime() {
        axios.delete('http://localhost:8070/time/delete-time/' + this.props.obj._id)
            .then((res) => {
                alert('Time successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.day}</td>
                <td>{this.props.obj.subject}</td>
                <td>{this.props.obj.class}</td>
                <td>{this.props.obj.teacher}</td>
                <td>{this.props.obj.time}</td>
                <td>{this.props.obj.date}</td>
                <td>
                    <Link className="edit-link" to={"/edit-time/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                    &nbsp;  Edit
                    </Link>
                    &emsp;&emsp;
                    <Button onClick={this.deleteTime} size="vh" variant="outline-danger">
                    <i class="far fa-trash-alt"></i>  
                       &nbsp; Delete</Button>
                </td>
            </tr>

        );
    }
}