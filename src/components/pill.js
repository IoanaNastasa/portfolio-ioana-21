import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/pill.module.scss';

const Pill = ({ text }) => (
  <div className={styles.pill}>
    { text }
  </div>
);

Pill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Pill;
