import React, { Component } from 'react';

class ToyCard extends Component {

  deleteToy = id => {
    // debugger÷\
    fetch('http://localhost:3000/toys/' + id, { method: 'DELETE' })
    .then(() => {
      this.props.handleClick()
      this.props.fetchToys()}
      )
  }

  addLike = toy => {
    let newLikes = toy.likes + 1
    let likedToy = {
      "name": toy.name, 
      "image": toy.image, 
      "likes": newLikes
    }
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(likedToy)
    }
    fetch('http://localhost:3000/toys/' + toy.id, reqObj)
    .then(r => r.json())
    .then(toyData => {
      this.props.handleClick()
      this.props.fetchToys()}
      )
    }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={()=> this.addLike(this.props.toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.deleteToy(this.props.toy.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
