import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import type { ContactProps } from './Contact.types';

export const Contact: React.FC<ContactProps> = ({ onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <motion.div>
      <div className={styles.contact}>
        <input
          type="text"
          inputMode="text"
          placeholder="How do I contact you?"
          value={value}
          onChange={handleChange}
        />
      </div>
    </motion.div>
  );
};
