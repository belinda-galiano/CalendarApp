import React, { Component } from 'react';
import './App.css';

import Calendar from './Calendar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className='tilte'> Get a name day for a specific day</h1>
        <div className='main-content'>
          <div className='content-box'>
            <h3>Pick a day</h3>
            <Calendar />
          </div>
          <div className='content-box'>
            <h3>Here is goin to appear the name</h3>
            <div className='name-box'>Name</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
