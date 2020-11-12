import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FooterLink.module.css';

const FooterLink = ({ footerItem }) => {
  const { href, icon } = footerItem;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${icon.iconName}`}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  );
};

export default FooterLink;
