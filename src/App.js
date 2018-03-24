import React, { Component } from 'react';
import './css/App.css';
import NavBar from './modules/Common/NavBar';
import {Branches} from './Branches';

class App extends Component {
  render() {
    return (
      <div id="wrapper" >
        <div id="main" >
          <Branches />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default App;
