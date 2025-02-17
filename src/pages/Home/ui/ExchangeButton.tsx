import styles from './ExchangeButton.module.css';
import type { ExchangeButtonProps } from './ExchangeButton.types';
import { motion, useAnimate, useAnimationControls } from 'framer-motion';

export const ExchangeButton: React.FC<ExchangeButtonProps> = ({
  onClick,
  disabled,
}) => {
  const [scope, animate] = useAnimate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await animate(
      scope.current,
      { scale: 1 },
      { type: 'spring', stiffness: 1000 },
    );
    await animate(
      scope.current,
      { scale: 0.8 },
      { type: 'spring', stiffness: 500 },
    );
    await animate(
      scope.current,
      { scale: 1 },
      { type: 'spring', stiffness: 500 },
    );
    onClick(e);
  };

  return (
    <motion.div className={styles.container} ref={scope}>
      <i className={styles.gradient} />
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={disabled}
      >
        Exchange <em>NOW</em>
      </button>
    </motion.div>
  );
};
