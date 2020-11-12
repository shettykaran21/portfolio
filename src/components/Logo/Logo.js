import React from 'react';

import styles from './Logo.module.css';
import logo from '../../images/logo.svg';
import footerLogo from '../../images/footer-logo.svg';

const Logo = () => {
  return (
    <div className={`${styles.logo}`}>
      <a href="#" className={styles.logoLink}>
        <img src={logo} alt="logo" />
        <img
          src={footerLogo}
          alt="logo"
          className={`${styles.footerLogo} footer-logo`}
        />
      </a>
    </div>
  );
};

export default Logo;
