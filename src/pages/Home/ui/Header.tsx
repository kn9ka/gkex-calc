import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <motion.header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.linkBackground}>
            <Link className={styles.link} to="/about">О нас</Link>
          </li>
          <li className={styles.linkBackground}>
            <Link className={styles.link} to="/kyc">KYC/AML</Link>
          </li>
          <li className={styles.linkBackground}>
            <Link className={styles.link} to="/contacts">Контакты</Link>
          </li>
          <li className={styles.linkBackground}>
            <Link className={styles.link} to="/reviews">Отзывы</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header
