import React from 'react';
import styles from './Reviews.module.css';
import Review from './Review';
import { reviewsMock } from './mock';


const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Отзывы</h1>
      <div className={styles.contsinerReviews}>
        {reviewsMock.map(review => (
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
