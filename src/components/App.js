import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ZipForm from './ZipForm';
import get from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      city: {},
      dates: [],
      selectedDate: null
    };
    this.url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
    this.apikey = "&units=imperial&appid=4319ff27021579d6c2adf5fc9c83b5eb";

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }//end of constructor

  onFormSubmit(zipcode) {
    //using axios for ajax call instead of fetch
    get(this.url + zipcode + this.apikey)
      .then(({ data }) => {
        const { city, list: dates } = data;
        this.setState({ zipcode, city, dates, selectedDate: null });
      })
      .catch(error => {
        alert(error);
      })
  }

  render() {
    return (
      <div className="App">
        This is my weather app. we'll use {this.url} for getting weather data.
       <ZipForm onSubmit={this.onFormSubmit} />
      </div>

    );
  }

} //end of App class

export default App;
