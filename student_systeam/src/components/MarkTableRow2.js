import React, { Component } from 'react';

import axios from 'axios';


export default class MarkTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteQuiz = this.deleteQuiz.bind(this);
    }

    deleteQuiz() {
        axios.delete('http://localhost:8070/marks/delete-mark/' + this.props.obj._id)
            .then((res) => {
                alert('Mark successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.studentID}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.marks}</td>
                <td>{this.props.obj.status}</td>
            
                
            </tr>

        );
    }
}