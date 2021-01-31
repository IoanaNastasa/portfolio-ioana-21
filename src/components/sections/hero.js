import React from 'react';
import styles from '../../styles/components/sections/hero.module.scss';
import Button from '../button';

const Header = () => (
  <section>
    <h2>
      I&#39;m
      <span>Ioana Nastasa</span>
    </h2>
    <h2>
      a
      <span>Frontend Developer</span>
      something.
    </h2>
    <p>This is a tagline that I don&#39;t know what should say.</p>
    <Button text="Let's chat" />
  </section>
);

export default Header;
