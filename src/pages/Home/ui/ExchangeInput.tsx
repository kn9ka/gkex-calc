import { motion } from 'framer-motion';
import styles from './ExchangeInput.module.css';
import type { ExchangeInputProps } from './ExchangeInput.types';

export const ExchangeInput: React.FC<ExchangeInputProps> = ({
  title,
  currencyLabel,
  imgSrc,
  value,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!Number(event.target.value) && event.target.value !== '') return;

    onChange?.(Number(event.target.value));
  };

  return (
    <motion.div className={styles.container}>
      <span className={styles.label}>{title}</span>
      <div className={styles.currency}>
        <div className={styles.currencyLabel}>
          <img src={imgSrc} alt={title} />
          <div>{currencyLabel}</div>
        </div>
        <div className={styles.amount}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
        </div>
      </div>
    </motion.div>
  );
};
