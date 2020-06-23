import React from "react";
import "./App.css";
import getRandomInt from "./Game";

const initialState = {
  guess: "",
  guesserror: "",
};

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
    var arr = event.target.value.split("");
    var positioncorrect = 0; //both position and numbers match
    var positionincorrect = 0; //numbers match but position do not
    var incorrect = 0; //both number and position do not match
    var i, j;
    var Mastermind = getRandomInt(0, 9);
    var RandomList = Mastermind.split("");
    for (i = 0; i < RandomList.length; i++) {
      for (j = 0; j < arr.length; j++) {
        if (RandomList[i] === arr[j]) {
          positionincorrect++;
        }
        if (RandomList[i] === arr[i]) {
          positioncorrect++;
        }
      }
    }

    positionincorrect = positionincorrect - positioncorrect;
    incorrect = 4 - positionincorrect - positioncorrect;

    if (positioncorrect === 4) {
      console.log(
        "All correct. You did it and the correct answer is: " + Mastermind
      );
    } else {
      console.log(
        "Position correct: " +
          positioncorrect +
          "\n Correct numbers: " +
          positionincorrect +
          "\n Incorrect numbers : " +
          incorrect +
          "And the solution is: " +
          Mastermind
      );
    }
    //clear form
    this.setState(initialState);
  };

  // Check this link to remove e from input as number.. https://stackoverflow.com/questions/31706611/why-does-the-html-input-with-type-number-allow-the-letter-e-to-be-entered-in

  render() {
    //console.log(this.state);
    return (
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
    );
  }
}
