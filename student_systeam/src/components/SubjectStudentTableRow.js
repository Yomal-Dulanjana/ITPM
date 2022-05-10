import React, { Component } from 'react';


export default class SubjectStudentTableRow extends Component {

   
    render() {


        return (

            <tr>
                
                <td>{this.props.obj.sname}</td>
                <td>{this.props.obj.scode}</td>
                <td>{this.props.obj.tname}</td>
                <td>{this.props.obj.class}</td>
                <td>{this.props.obj.language}</td>
                
            </tr>

        );
    }
}