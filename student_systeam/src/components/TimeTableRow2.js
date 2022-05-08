import React, { Component } from 'react';
import axios from 'axios';

export default class TimeTableRow2 extends Component {

    constructor(props) {
        super(props);
        this.deleteTime = this.deleteTime.bind(this);
    }

    deleteTime() {
        axios.delete('http://localhost:8070/time/delete-time/' + this.props.obj._id)
            .then((res) => {
                alert('time successfully deleted!')
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
               
            </tr>

        );
    }
}