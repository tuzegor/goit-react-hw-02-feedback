import React, { Component } from 'react';
import styles from './Statistics.module.css';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.statistics}>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
export default Statistics;
