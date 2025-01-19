import { motion } from 'framer-motion';
import styles from './Switch.module.css';
import type { SwitchProps } from './Switch.types';
import { MdOutlineSwapVert } from 'react-icons/md';

export const Switch: React.FC<SwitchProps> = ({ onClick }) => {
  return (
    <motion.div
      className={styles.container}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <MdOutlineSwapVert size={24} />
    </motion.div>
  );
};
