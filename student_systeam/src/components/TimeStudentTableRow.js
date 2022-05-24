import React, { Component } from 'react';


export default class TimeStudentTableRow extends Component {

 

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

                </td>
            </tr>

        );
    }
}