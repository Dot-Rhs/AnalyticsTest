import React, { Component } from "react";
import ReactGA from "react-ga";
import logo from "./partridge.jpg";
import "./App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-123791717-1");
  ReactGA.pageview("/homepage");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Partridge you wanker!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
