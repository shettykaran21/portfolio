import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.css';

const NavItem = ({ navItem }) => {
  return (
    <motion.li
      className={styles.navItem}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, originX: 0 }}
    >
      <Link to={navItem.path} className={styles.navLink}>
        <FontAwesomeIcon
          icon={navItem.icon}
          size="lg"
          color="var(--color-blue-dark-1)"
        />
        <span className={`${styles.linkText} link-text`}>
          {navItem.navTitle}
        </span>
      </Link>
    </motion.li>
  );
};

export default NavItem;
