import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calculator from './Component/calculator';
class App extends Component {


  constructor(){
    super();
   
    this.state = {name: "Amornrat", age : 20};
    this.state = {num1: ""};
  }
  onClick(){
    this.setState({name: "Gift"});
  }

setAge(e){
  const age = e.target.value;
  this.setState({age: age});
}



  getVal() {
      return "getVal";
  }

  render(){

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      </div>
      <p classname="App-intro">
      </p>
      <div><Calculator /></div>
      
    </div>
    );
  }
}

export default App;
