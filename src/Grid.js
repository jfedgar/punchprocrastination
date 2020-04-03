import React from 'react';
import _ from 'underscore';
import GridBox from './GridBox.js'

class Grid extends React.Component {

  // ensures the checkedBoxes array always has a length of 35
  checkedBoxesArray() {
    let blankArray = Array(35).fill(false)
    return _.map(blankArray, (value, index) => {
      return this.props.checkedBoxes[index] || false;
    });
  }

  displayGridBoxes() {
    let checkedBoxesArray = this.checkedBoxesArray();
    let gridBoxes = _.map(checkedBoxesArray, (checked, key) => {
      return (
        <GridBox
          id={key}
          key={key}
          checked={checked}
          checkedBoxes={checkedBoxesArray}
          calendarID={this.props.calendarID}
          db={this.props.db}
        />
      );
    });

    return gridBoxes;
  }

  render() {
    return(
      <div id='grid'>
        { this.displayGridBoxes() }
      </div>
    );
  }

}

export default Grid