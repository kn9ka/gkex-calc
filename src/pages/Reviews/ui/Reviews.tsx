import React from 'react';
import styles from './Reviews.module.css';
import Review from './Review';
import { REVIEWS } from './mock';

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Reviews</h1>
      <div className={styles.contsinerReviews}>
        {REVIEWS.map((review) => (
          <Review
            key={review.id}
            name={review.name}
            date={review.date}
            stars={review.stars}
            text={review.text}
            crypto={review.crypto}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
