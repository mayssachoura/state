import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import me from './me.jpg'
import Timer from './timer';

class App extends Component{
  constructor() {
    super();
    this.state = {
      FullName: "mayssa choura",
      Bio: "22 yo",
      imgSrc: me,
      Profession: "learn by making",
    };
  } 
state = {
  on: false,
}

render() {
  let showProfile = () => {
    this.setState({
      on: !this.state.on

    })
  };
  return (
    <div className="App">
      {!this.state.on &&
        <button onClick={showProfile}>Show</button>
      }
      {this.state.on &&
        <button onClick={showProfile}>hide</button>
      }
      {this.state.on && <h2>
        <Timer></Timer>
<div className="cordon">
          <img src={this.state.imgSrc} alt="" height={300} width={300}/>
          <h1>Fullname : {this.state.FullName} <br/></h1>
          <h1> Bio : {this.state.Bio}  </h1>
          <h1>Profession : {this.state.Profession}<br/></h1>
         
        
          </div>
          </h2>}


    </div>
  );
}
}

export default App;

