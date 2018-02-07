import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    console.log("Props: ", this.props)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then( response => {
      console.log(response.data);
      this.setState({
        students: response.data
      })
    })
  }



  render() {

    let students = this.state.students.map( (student, i) => {
      return (
        <div key={i}>
          <Link to={`/student/${student.id}`}><h3 key={student.id} >
            {`${student.first_name} ${student.last_name}`}</h3>
          </Link>
        </div>
      )
    })

    return (
      <div className="box">
        <Link to="/"><button className="back-button">Back</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}