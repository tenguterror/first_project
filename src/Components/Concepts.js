import React from 'react';
import Description from './Description';

const Concepts = (props) => {
  return (
    <div>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[0].image} alt='Stairs of components' />
          <h2>{props.items[0].title}</h2>
          <Description description={props.items[0].description} />
        </li>
      </ul>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[1].image} alt='Data structure of state' />
          <h2>{props.items[1].title}</h2>
          <Description description={props.items[1].description} />
        </li>
      </ul>
      <ul id='concepts'>
        <li className='concept'>
          <img src={props.items[2].image} alt='Microphone of events' />
          <h2>{props.items[2].title}</h2>
          <Description description={props.items[2].description} />
        </li>
      </ul>
    </div>
  );
};

export default Concepts;
