import React from 'react';

const Concepts = (props) => {
  return (
    <div>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[0].image} alt='Stairs of components' />
          <h2>{props.items[0].title}</h2>
          <p>{props.items[0].description}</p>
        </li>
      </ul>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[1].image} alt='Data structure of state' />
          <h2>{props.items[1].title}</h2>
          <p>{props.items[1].description}</p>
        </li>
      </ul>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[2].image} alt='Micropone of events' />
          <h2>{props.items[2].title}</h2>
          <p>{props.items[2].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Concepts;
