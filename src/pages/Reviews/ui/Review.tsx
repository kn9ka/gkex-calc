import type { ReviewProps } from './Review.types';
import styles from './Review.module.css';
import React from 'react';


const Review: React.FC<ReviewProps> = ({ name, date, stars, text, crypto }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.date}>{date}</span>
      <div className={styles.stars}>{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
      <p className={styles.text}>{text}</p>
      <p className={styles.direction}>
        {crypto.amount} {crypto.from} → {crypto.to} {crypto.rate}
      </p>
    </div>
  );
};

export default Review
