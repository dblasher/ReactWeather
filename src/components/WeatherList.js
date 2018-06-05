import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {

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
                        index={index} />)}
            </div>
        )
    }

}// end of weather list

export default WeatherList;