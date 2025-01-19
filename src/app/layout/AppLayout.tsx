import type { AppLayoutProps } from './AppLayout.types';
import styles from './AppLayout.module.css';
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
