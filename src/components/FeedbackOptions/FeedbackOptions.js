import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div className={styles.options}>
        <button
          className={styles.goodBtn}
          type="button"
          name="good"
          onClick={e => {
            onLeaveFeedback(e.target.name);
          }}
        >
          Good
        </button>
        <button
          className={styles.neutralBtn}
          type="button"
          name="neutral"
          onClick={e => {
            onLeaveFeedback(e.target.name);
          }}
        >
          Neutral
        </button>
        <button
          className={styles.badBtn}
          type="button"
          name="bad"
          onClick={e => {
            onLeaveFeedback(e.target.name);
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
