import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <img src="./loader.png" alt="Loader" className={styles.image} />

      <div className={styles.dotsContainer}>
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className={styles.dot}
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.6 - index * 0.2, // Adds delay for sequential jumping
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
