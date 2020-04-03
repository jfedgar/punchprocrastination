import React from 'react';
import GridBox from './GridBox.js'

class Grid extends React.Component {
  constructor(props) {
    // get grid from firebase (?) (or pass in with props)
    // for each box pass in 
    super(props)
  }

  render() {
    return(
      <div id='grid'>
        <GridBox id='1x1' clicked={true} />
        <GridBox id='1x2' clicked={true} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />

        <GridBox id='1x1' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />

        <GridBox id='1x1' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />

        <GridBox id='1x1' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />

        <GridBox id='1x1' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />
        <GridBox id='1x2' clicked={false} />




      </div>
    );
  }

}

export default Grid