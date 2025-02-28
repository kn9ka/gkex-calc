import type { AppLayoutProps } from './AppLayout.types';
import styles from './AppLayout.module.css';
import { useEffect } from 'react';
import Header from '@/pages/Home/ui/Header';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  useEffect(() => {
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
    );
};
