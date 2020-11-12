import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import FooterLink from '../FooterLink/FooterLink';

import footerLogo from '../../images/footer-logo.svg';
import styles from './Footer.module.css';

const footerItems = [
  {
    name: 'Github',
    href: 'https://www.github.com/shettykaran21',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shettykaran21/',
    icon: faLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/shettykaran21',
    icon: faTwitter,
  },
];

const Footer = () => {
  const footerLinkList = footerItems.map((footerItem, index) => {
    return <FooterLink footerItem={footerItem} key={index} />;
  });

  return (
    <footer className={styles.footer}>
      <div>
        <img src={footerLogo} alt="footer-logo" />
        <FontAwesomeIcon icon={faHeart} className={styles.iconHeart} />
      </div>
      <div className={styles.social}>{footerLinkList}</div>
    </footer>
  );
};

export default Footer;
