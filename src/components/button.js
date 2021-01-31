import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/button.module.scss';

const Button = ({ text, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
