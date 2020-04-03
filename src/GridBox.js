import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function GridBox(props) {
  const [checked, setChecked] = useState(props.clicked === true);

  function handleClick(e) {
    console.log('clicked!!!!');
    console.log(e)
    e.preventDefault();
    setChecked(!checked)
  }

  function displayCheck() {
    if (checked === true) {
      return <FaCheck class='check' />;
    }
  }

  return (
    <div id={props.id} class='gridBox' onClick={handleClick}>
      { displayCheck() }
    </div>
  );
}

export default GridBox;