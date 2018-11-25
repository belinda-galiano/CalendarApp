import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import moment from 'moment';

const apiURL = 'data.json';

class App extends Component {
  constructor(props) {
    super(props);
    const now = moment();

    this.state = {
      data: [],
      startDate: now,
      day: now.days(),
      month: now.month()
    }
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => this.setState({
        data: json.data
      }))
  };

  handleChange(date) {
    const [day, month] = date.split('-');

    this.setState({
      day: Number(day),
      month: Number(month),
      startDate: date
    });
  }

  currentName() {
    const { day, month } = this.state;

    const matches = this.state.data.filter(v => v.day === day && v.month === month);
    if (matches.length) {
      return matches[0].name;
    }

    return '';
  }

  render() {
    const { startDate } = this.state;
    const name = this.currentName();

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
