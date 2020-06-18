import React from "react";
import "./App.css";

const initialState = {
  guess: "",
  guessError: "",
};

export default class Validation extends React.Component {
  state = initialState;

  validate = () => {
    let guessError = "";

    if (
      this.state.guess.includes(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" || "abcdefghijklmnopqrstuvwxyz"
      )
    ) {
      guessError = "invalid input";
    } else if (this.state.guess.maxLength !== 4) {
      guessError = "The length of input should be 4";
    }

    if (guessError) {
      this.setState({ guessError });
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "numbers";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            guess="guess"
            type="number"
            placeholder="0-9"
            value={this.state.guess}
            onChange={this.handleChange}
            maxLength="4"
          />
          {this.state.guessError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.guessError}
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
