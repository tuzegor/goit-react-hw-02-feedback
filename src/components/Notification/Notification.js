import React, { Component } from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p className={styles.message}>{message}</p>;
  }
}

Notification.defaultProps = {
  message: 'No result',
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
