import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

function GridBox(props) {
  const [checked, setChecked] = useState(props.checked === true);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  function handleClick(e) {
    e.preventDefault();
    setChecked(!checked)
    sendToFirebase(!checked)
  }

  function sendToFirebase(isChecked) {
    let checkedBoxes = props.checkedBoxes
    checkedBoxes[props.id] = isChecked;
    props.db.collection("calendars").doc(props.calendarID).set({
      checkedBoxes:  checkedBoxes,
      activity: props.activity,
      lastUpdated: Date.now()
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

  }

  function displayCheck() {
    if (checked === true) {
      return <FaCheck className='check' />;
    }
  }

  return (
    <div id={props.id} className='gridBox' onClick={handleClick}>
      { displayCheck() }
    </div>
  );
}

export default GridBox;