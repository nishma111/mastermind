import React from "react";
import "./App.css";

//Put code here

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Game() {
  return (
    <div className="App-header">
      Main Menu
      <div>
        <button>Enter </button>
        <div className="App">
          {getRandomInt(0, 9)} {getRandomInt(0, 9)} {getRandomInt(0, 9)}{" "}
          {getRandomInt(0, 9)}{" "}
        </div>
      </div>
    </div>
  );
}

export default Game;
