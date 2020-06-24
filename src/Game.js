import React from "react";
import "./App.css";
import Validation from "./Validation";

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var Random = Math.floor(Math.random() * (max - min + 1)) + min;
  Random = String(Random);
  return Random;
}

function Game() {
  return (
    <div className="App-header">
      Main Menu
      <form>
        <div>
          <Validation />
        </div>
      </form>
    </div>
  );
}

export default Game;
