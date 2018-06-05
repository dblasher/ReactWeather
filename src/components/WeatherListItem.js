import React, { Component } from 'react';

class WeatherListItem extends Component {

    getWeekday(date) {
        const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = date.getDay();
        return dayNames[weekday];
      }

    render() {
        const {day} = this.props;
        const date = new Date(day.dt *1000);
        const weekday = this.getWeekday(date);
        return (
            <div className = "weather-list-item">
            <h2> {date.getMonth() + 1} / {date.getDate()}</h2>
            <h3>{weekday}</h3>
            <h3> {day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h3>
            </div>
        );
    }
} //end of list item class

export default WeatherListItem;