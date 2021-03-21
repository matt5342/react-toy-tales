import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {


  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard toy={toy} fetchToys={props.fetchToys} handleClick={props.handleClick} />)}
    </div>
  );
}

export default ToyContainer;
