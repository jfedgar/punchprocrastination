import React, { useState, useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

function GridBox(props) {
  const [checked, setChecked] = useState(props.checked === true);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    // only send to firebase on updates,
    //   not on initial mount (which will always be unchecked)
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      sendToFirebase()
    }
  }, [checked]);

  function handleClick(e) {
    e.preventDefault();
    setChecked(!checked)
  }

  function sendToFirebase() {
    let checkedBoxes = props.checkedBoxes
    checkedBoxes[props.id] = checked;
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