import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase';
import CopyToClipboard from 'react-copy-to-clipboard'
import { MdContentCopy } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserView,
  osName,
} from "react-device-detect";
import logo from './assets/header.png'
import './App.css';
import Grid from './Grid.js'

class App extends React.Component {
  state = {
    url: window.location.href,
    uniqueID: null,
    userData: {},
    copied: false,
    activity: ""
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
    this.resolveUniqueID();
    this.initializeFirebase();
  }

  componentDidMount() {
    this.getFirebaseData();
  }

  resolveUniqueID() {
    let path = window.location.hash.substring(1);
    let pathLength = path.length
    if (pathLength !== 36) {
      this.generateUnqiueID();
    } else {
      this.state['uniqueID'] = path;
    }
  }

  generateUnqiueID() {
    let newID = uuidv4();
    //window.location.pathname = newID;
    window.history.pushState({}, document.title, '#' + newID);
    this.state['url'] = window.location.href
    this.state['uniqueID'] = newID
  }

  getFirebaseData() {
    // We already have data for user:
    if (!_.isEmpty(this.state.userData)) return false;

    this.state.db.collection("calendars")
      .doc(this.state.uniqueID)
      .get()
      .then((doc) => {
        this.setState({
          userData: doc.data() || {},
          activity: doc.data().activity
        });
      })
      .catch(function(error) {
        console.error("Error reading document: ", error);
      });
  }

  initializeFirebase() {
    let firebaseConfig = {
      apiKey: "AIzaSyDEUWWqLD9MXOlxPHhhcT-TicbaIGBH55I",
      authDomain: "punchprocrastination.firebaseapp.com",
      databaseURL: "https://punchprocrastination.firebaseio.com",
      projectId: "punchprocrastination",
      storageBucket: "punchprocrastination.appspot.com",
      messagingSenderId: "881349191831",
      appId: "1:881349191831:web:6776979685e5b82347e1d2",
      measurementId: "G-Y0D1Y2B65C"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }

    this.state['firebaseConnection'] = firebase
    this.state['db'] = firebase.firestore();
  }

  isMac() {
    this.isMac = this.isMac || osName.toLowerCase().includes('mac')
  }

  bookMarkInstructions() {
    if (this.isMac) {
      return <span>Click Command (⌘) + D to add site to bookmarks</span>;
    } else {
      return <span>Click CTRL (^) + D to add site to bookmarks</span>;
    }
  }

  updateActivity(e) {
    e.preventDefault();
    this.setState({ activity: e.target.value }, () => {
      this.sendActivityToFirebase();
    });

  }

  sendActivityToFirebase() {
    this.state.db.collection("calendars").doc(this.state.uniqueID).set({
      checkedBoxes:  this.state.userData.checkedBoxes || [],
      activity: this.state.activity,
      lastUpdated: Date.now()
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="activityBox">
            My Thing:
            <input
              type="text"
              name="activity"
              onChange={this.updateActivity.bind(this)}
              value={this.state.activity}
            />
          </div>
        </div>

        <div id="main">
          <div id='calendar'>
            <Grid
              newUser={this.state.newUser}
              checkedBoxes={this.state.userData['checkedBoxes'] || []}
              calendarID={this.state.uniqueID}
              db={this.state.db}
              activity={this.state.activity}
            />
          </div>

          <CopyToClipboard text={this.state.url}
            onCopy={() => this.setState({copied: true})}>
            <span id='copyButton'><MdContentCopy />Copy URL To Clipboard</span>
          </CopyToClipboard>
          <BrowserView>
            { this.bookMarkInstructions() }
          </BrowserView>
        </div>
      </div>
    );
  }
}

export default App;
