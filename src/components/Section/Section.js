import React, { Component } from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </>
    );
  }
}

Section.defaultProps = {
  title: 'Section title',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
