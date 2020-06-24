import React from "react";
import "./App.css";
import { getRandomInt } from "./Game";

const RandomList = [
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
  getRandomInt(0, 9),
];

const initialState = {
  guess: "",
  guesserror: "",
};

function refreshPage() {
  window.location.reload();
}

export default class Validation extends React.Component {
  state = initialState;

  handleChange = (event) => {
    if (isNaN(event.target.value)) {
      this.setState({
        guesserror: "invalid input",
      });
    } else {
      this.setState({
        guess: event.target.value,
        guesserror: "",
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var arr = this.state.guess.split("");
    var positioncorrect = 0; //both position and numbers match
    var positionincorrect = 0; //numbers match but position do not
    var incorrect = 0; //both number and position do not match
    var i, j;
    var generate = false;

    console.log(RandomList);
    console.log(arr);

    for (i = 0; i < RandomList.length; i++) {
      for (j = 0; j < arr.length; j++) {
        if (RandomList[i] === arr[j]) {
          positionincorrect++;
        }
      }
      if (RandomList[i] === arr[i]) {
        positioncorrect++;
      }
    }

    positionincorrect = positionincorrect - positioncorrect;
    incorrect = 4 - positionincorrect - positioncorrect;

    if (positioncorrect === 4) {
      alert("All correct. You did it.");
      {
        refreshPage();
      }
    } else {
      alert(
        "TRY AGAIN!! \n Position correct: " +
          positioncorrect +
          "\n Correct numbers: " +
          positionincorrect +
          "\n Incorrect numbers : " +
          incorrect
      );
    }
    //clear form
    //this.setState(initialState);
  };

  handleAnswer = (event) => {
    alert("The correct solution is: " + RandomList);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              placeholder="0-9"
              value={this.state.guess}
              onChange={this.handleChange}
              maxLength="4"
              minLength="4"
              required
            />

            {this.state.guesserror ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.guesserror}
              </div>
            ) : null}
          </div>
          <p className="footer">
            <button type="submit">FINISH</button>
          </p>
        </form>
        <form onSubmit={this.handleAnswer}>
          <div>
            <p className="footer2">
              <button type="submit">GIVE UP!</button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
