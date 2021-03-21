import React, { Component } from 'react';

class ToyForm extends Component {

  state = {}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    let newToy = {
      "name": this.state.name, 
      "image": this.state.image, 
      "likes": 0
    }
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newToy)
    }
    fetch('http://localhost:3000/toys', reqObj)
    .then(r => r.json())
    .then(toyData => {
      this.props.handleClick()
      this.props.fetchToys()}
      )
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={e => this.handleChange(e)} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={e => this.handleChange(e)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
