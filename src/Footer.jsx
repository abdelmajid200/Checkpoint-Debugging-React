import React from 'react';
import './Footer.css'

const Footer = ({count,increment,decrement}) => {
  

  return (
    <div>    
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}


export default Footer;
