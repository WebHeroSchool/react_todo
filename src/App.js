import React from 'react';
import logo from './logo.svg';
import './App.css';

const numb = 2;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          color:'purple',
          fontSize:20
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {numb},
          {flag&& ' TRUE '},
          {numb +2},
          {flag ? 'YES' : 'NO'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
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

export default App;
