import React from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import './Calendar.css';

class Calendar extends React.Component {
  render() {
    return <ModernDatepicker 
          date={this.props.startDate} 
          format={'DD-MM-YYYY'} 
          className='style'         
          onChange={this.props.onChange}
          placeholder={'Select a date'}
        />
  }
}
export default Calendar;