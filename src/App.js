import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//     return <h1>{props.title}</h1>
// }

// const Hello = (props) => <h1>{props.title}</h1>

class Hello extends Component {
    render () {
        return <h1>{this.props.title}</h1>
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hola desde un props' />
        <p>Vamos a aprender ReactJS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
