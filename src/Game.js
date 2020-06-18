import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation";

var guess = "";
var array = guess.split("");
console.log(array);
let errors = {};
const RandomList = [
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
];
React.state = {
  Random: [],
};

//class App extends React.Component {}

/* RandomList: [
    {
      A: [],
      B: [],
      C: [],
      D: [],
    },
  ],
};
/*
//Put code here
class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Random: " ",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/*function handleChange() {
  if (guess.length === 0) {
    errors = "Input is required";
  } else if (guess.length !== 4) {
    errors = "4 characters are required";
  }
}
*/

function Game() {
  return (
    <div className="App-header">
      Main Menu
      <div className="App">
        {RandomList[0]} {RandomList[1]} {RandomList[2]} {RandomList[3]}{" "}
      </div>
      <form>
        <div>
          <Validation />
          <div className="Checker">
            <label> Hello </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Game;
