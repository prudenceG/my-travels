import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
        destination = "Nantes"
        country = "France"
        photo = "https://i.postimg.cc/zfphBK4x/1200px-_Marit.jpg"
        distance = "450"
        />
        <Travel
        destination = "Edimburgh"
        country = "Scotland"
        photo = "https://i.postimg.cc/63mGVwWR/edimbourg.1475787.w740.jpg"
        distance = "2.550"
        />

      </div>
    );
  }
}

export default App;
