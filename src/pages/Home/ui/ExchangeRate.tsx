import styles from './ExchangeRate.module.css';
import type { ExchangeRateProps } from './ExchangeRate.types';

export const ExchangeRate: React.FC<ExchangeRateProps> = ({ title, rate }) => {
  return (
    <div className={styles.container}>
      <span>1 {title}</span>
      <span> = </span>
      <span>
        {rate} {title}
      </span>
    </div>
  );
};
