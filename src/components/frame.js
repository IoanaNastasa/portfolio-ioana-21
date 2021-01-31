import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/frame.module.scss';

const Frame = ({ children }) => (
  <div className={styles.frame}>
    {children}
  </div>
);

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;
