import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  countNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
            onClick={this.countGoodFeedback}
          >
            Good
          </button>
          <button
            className="neutralBtn"
            type="button"
            onClick={this.countNeutralFeedback}
          >
            Neutral
          </button>
          <button
            className="badBtn"
            type="button"
            onClick={this.countBadFeedback}
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
