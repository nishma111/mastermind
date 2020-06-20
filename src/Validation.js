import React from "react";
import "./App.css";

const initialState = {
  guess: "",
  guesserror: "",
};

export default class Validation extends React.Component {
  state = initialState;

  handleChange = (event) => {
    if (isNaN(event.target.value)) {
      console.log("Here");
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
    /*if (value.length < "4") {
      this.setState({
        guesserror: "The length should be 4",
      });
    }*/
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
