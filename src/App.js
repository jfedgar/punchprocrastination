import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'
import { MdContentCopy } from 'react-icons/md';
import {
  BrowserView,
  osName,
} from "react-device-detect";
import cal from './assets/30day.png';
import './App.css';

class App extends React.Component {
  state = {
    url: 'foo',
    copied: false,
  }

  constructor(props) {
    //set url
    // If nothing after punchprocrastination.com/ generate random uuid and append
    //   set url in browser
    //   this is a new user
    //   don't save until they click a calendar entry or set an activity
    // If there is anything after punchprocrastination.com/ look up in firebase
    //   no need to set url in browser
    //   If found on firebase, get data and fill in

    //   If not found ... ?
    //      Should probably also set as the url value 

    super(props)
  }

  isMac() {
    this.isMac = this.isMac || osName.toLowerCase().includes('mac')
  }

  bookMarkInstructions() {
    if (this.isMac) {
      return <span>Click Command (⌘) + D to add to favorites</span>;
    } else {
      return <span>Click CTRL (^) + D to add to favorites</span>;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <CopyToClipboard text={this.state.url}
            onCopy={() => this.setState({copied: true})}>
            <span><MdContentCopy />Copy URL To Clipboard</span>
          </CopyToClipboard>
          <BrowserView>
            { this.bookMarkInstructions() }
          </BrowserView>
          <div id='calendar'>
            <div id='grid'></div>

          </div>
          {/*
          <div id='grid' style={{position: 'relative', border: '1px solid black' }}>
            <img src={cal} className="calendar" alt="logo" style={{position: 'absolute', top:0, left:0 }}/>
            <div className='innergrid' style={{position: 'absolute', top:0, left:0, border: '1px solid red'}}/>
          </div>
          */}
            {/*
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            */}
        </div>
      </div>
    );
  }
}

export default App;
