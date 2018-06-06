import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.onDayClick = this.onDayClick.bind(this);
    }

    onDayClick(index){
        const {onDayClick} = this.props;
        onDayClick(index);
    }

    render() {
        const { days } = this.props;
        const { city } = this.props;
        return (

            <div className="weather-list flex-parent">
                <h1>{city} 7 Day Forecast</h1>
                {days.map((day, index) =>
                    <WeatherListItem
                        key={day.dt}
                        day={day}
                        index={index}
                        onDayClick = {this.onDayClick} />)}
            </div>
        )
    }

}// end of weather list

export default WeatherList;