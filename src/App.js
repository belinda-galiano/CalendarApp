import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import moment from 'moment';

const apiURL = 'data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: 0,
      month: 0,
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => this.setState({
        name: json.data[1].name,
        day: json.data.day,
        month: json.data.month
      }))
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const { name, startDate } = this.state;
    console.log(name);
    return (
      <div>
        <h1 className='tilte'> Get a name day for a specific day</h1>
        <div className='main-content'>
          <div className='content-box'>
            <h3>Pick a day</h3>
            <Calendar startDate={startDate} onChange={(date) => this.handleChange(date)} />
          </div>
          <div className='content-box'>
            <h3>Here is goin to appear the name</h3>
            <div className='name-box'>{name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
