import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import cal from './assets/30day.png';
import './App.css';

class App extends React.Component {
  state = {
    url: 'foo',
    copied: false
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <CopyToClipboard text={this.state.url}
            onCopy={() => this.setState({copied: true})}>
            <span>Copy URL To Clipboard</span>
          </CopyToClipboard>
          <BrowserView>
            <span>Or click ctrl/cmd D to add to favorites</span>
          </BrowserView>
            <img src={cal} className="App-logo" alt="logo" />
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
