/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/utils/global-styles.scss';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <>
    <div
      className={styles.layout}
    >
      <section>{children}</section>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
