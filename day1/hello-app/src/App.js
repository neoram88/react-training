import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello,{Email} from './Hello';
import Timer from './Timer';
import {TodoApp} from './ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello str="sith"></Hello>
        <Hello str="Luke"></Hello>
        <Email mail="sds@sdsd.s"></Email>
        <Timer/>
        <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;
