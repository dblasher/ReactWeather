import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ZipForm from './ZipForm';

class App extends Component {
constructor(props){
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

  onFormSubmit(zipcode){
    this.setState( {zipcode} );
  }

  render() {
    return (
      <div className="App">
       This is my weather app. we'll use {this.url} for getting weather data.
       <ZipForm onSubmit = {this.onFormSubmit}/>
      </div>
      
    );
  }

} //end of App class

export default App;
