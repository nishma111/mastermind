import React from "react";
import "./App.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var solution= getRandomAnswer();
    if(solution===this.state.value)
    {
      alert('Correct answer: ' + this.state.value);
    }
    else
    {
      alert('Incorrect answer! Solution:' + solution);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Guess:   
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// Put code here
//function to generate a random number between [0-5]
function getRandom(max)
{
  return Math.floor(Math.random() * Math.floor(max));
}

//function to create a random answer
function getRandomAnswer()
{
  var x1= getRandom(6);
  var x2= getRandom(6);
  while(x2===x1)
  {
    x2= getRandom(6);
  }
  var x3= getRandom(6);
  while(x3===x1 || x3===x2)
  {
    x3= getRandom(6);
  }
  var x4= getRandom(6);
  while(x4===x1 || x4===x2 || x4===x3)
  {
    x4= getRandom(6);
  }
  
  if(x1===0)
  {
    x1= x1.toString();
    x2= x2.toString();
    x3= x3.toString();
    x4= x4.toString();
    var sum= x1+x2+x3+x4;
    //sum= Number(sum); //if I convert to int 0123 will become 123.
    return sum;
  }
  var answer= (x1*1000)+(x2*100)+(x3*10)+(x4*1);
  answer= String(answer);
  return answer;
}


function Game() {
  return (
    <div className="App-header">
      Mastermind
      <div className="Output">
        {getRandomAnswer()}
      </div>
    
    <NameForm/>

      <div className="OptionPosition">
        <button className="Options">0</button>
        <button className="Options">1</button>
        <button className="Options">2</button>
        <button className="Options">3</button>
        <button className="Options">4</button>
        <button className="Options">5</button>
      </div>
    </div>
    
  );
}


export default Game;
