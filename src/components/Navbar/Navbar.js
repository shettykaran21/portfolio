import React from 'react';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const navItems = [
  { navTitle: 'Home', icon: faHome },
  { navTitle: 'Projects', icon: faProjectDiagram },
  { navTitle: 'About', icon: faUser },
  { navTitle: 'Contact', icon: faEnvelope },
];

const Navbar = () => {
  const navList = navItems.map((navItem, index) => {
    return <NavItem navItem={navItem} key={index} />;
  });

  return (
    <motion.nav
      className={`${styles.navbar} navbar`}
      initial={{ width: '8rem' }}
      whileHover={{ width: '25rem' }}
    >
      <ul className={styles.navbarNav}>
        <Logo />
        {navList}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
