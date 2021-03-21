import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false, 
    toys: []
  }

  componentDidMount(){
    this.fetchToys()
  }
  
  fetchToys = () => {
    fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(toyData => this.setState({toys: toyData}))
  }
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm fetchToys={this.fetchToys} handleClick={this.handleClick} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} fetchToys={this.fetchToys} handleClick={this.handleClick} />
      </>
    );
  }

}

export default App;
