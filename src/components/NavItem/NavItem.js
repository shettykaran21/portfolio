import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import styles from './NavItem.module.css';

const NavItem = ({ navItem }) => {
  return (
    <motion.li
      className={styles.navItem}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, originX: 0 }}
    >
      <a href="#" className={styles.navLink}>
        <FontAwesomeIcon
          icon={navItem.icon}
          size="lg"
          color="var(--color-blue-dark-1)"
        />
        <span className={`${styles.linkText} link-text`}>
          {navItem.navTitle}
        </span>
      </a>
    </motion.li>
  );
};

export default NavItem;
