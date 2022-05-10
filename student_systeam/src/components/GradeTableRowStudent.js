import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class GradeTableRowStudent extends Component {

   

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
               
                <td>
                    
                </td>
            </tr>

        );
    }
}