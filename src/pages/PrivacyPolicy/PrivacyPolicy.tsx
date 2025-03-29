import { motion } from 'framer-motion';
import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p className={styles.text}></p>
      <h2 className={styles.subtitle}>

      </h2>
      <p className={styles.text}>

      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
