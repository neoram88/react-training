import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Hello extends Component {

  constructor(props){
    super(props);
    this.state = {name:this.props.str}
  }
  
  updateName(attr){
    this.setState({name:attr});
    // this.props.str=attr;
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>{this.updateName('India')}}>Update Name</button>
      </div>
    );
  }
}

export class Email extends Component{
  sayHello(attr){
    alert("Hello folks: "+attr);
  }

  render() {
    return (
      <div>
        <h2>Mail: {this.props.mail}</h2>
        <button onClick={this.sayHello}>Say Hi!</button>
        <button onClick={()=>{this.sayHello(this.props.mail)}}>Say Hi to me!</button>
     </div>
    );
  }
}



