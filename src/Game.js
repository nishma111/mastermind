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
      <div className="App">
        {getRandomInt(0, 9)} {getRandomInt(0, 9)} {getRandomInt(0, 9)}{" "}
        {getRandomInt(0, 9)}{" "}
      </div>
      <div>
        <input type="tel" placeholder="0-9" />
      </div>
      <div className="footer">
        <button>Enter</button>
      </div>
    </div>
  );
}

export default Game;
