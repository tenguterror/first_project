import React from 'react';

const Concepts = (props) => {
  return (
    <ul id="concepts">
        <li className="concept">
          <img src={props.items[0].image} alt="Stairs of components" />
          <h2>{props.items[0].title}</h2>
          <p>{props.items[0].description}</p>
        </li>
      </ul>
  )
};
  
export default Concepts;
