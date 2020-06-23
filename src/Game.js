import React from "react";
import "./App.css";
import Validation from "./Validation";

var guess = "";
var array = guess.split("");
console.log(array);
//let errors = {};
const RandomList = [
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
];
React.state = {
  Random: [],
};

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var Random = Math.floor(Math.random() * (max - min)) + min;
  Random = String(Random);
  return Random;
}

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
        </div>
      </form>
    </div>
  );
}

export default Game;
