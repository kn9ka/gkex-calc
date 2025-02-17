import styles from './ExchangeButton.module.css';
import type { ExchangeButtonProps } from './ExchangeButton.types';

export const ExchangeButton: React.FC<ExchangeButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <div className={styles.container}>
      <i className={styles.gradient} />
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        Exchange <em>NOW</em>
      </button>
    </div>
  );
};
