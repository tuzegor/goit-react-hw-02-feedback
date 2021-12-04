import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good > 0) {
      return Math.round((this.state.good * 100) / this.countTotalFeedback());
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <div className="feedback">
          <h2 className="title">Please leave feedback</h2>
          <button
            className="goodBtn"
            type="button"
            name="good"
            onClick={e => {
              this.countFeedback(e.target.name);
            }}
          >
            Good
          </button>
          <button
            className="neutralBtn"
            type="button"
            name="neutral"
            onClick={e => {
              this.countFeedback(e.target.name);
            }}
          >
            Neutral
          </button>
          <button
            className="badBtn"
            type="button"
            name="bad"
            onClick={e => {
              this.countFeedback(e.target.name);
            }}
          >
            Bad
          </button>
        </div>
        <div className="statistics">
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default App;
