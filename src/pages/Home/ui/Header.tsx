import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <motion.header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <Link to="/">
            <img className={styles.img} src="/loader.png" alt="logo" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
