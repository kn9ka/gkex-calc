import { Link } from '@remix-run/react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link to="/contacts">Contacts</Link>
        <Link to="/kyc">KYC</Link>
        <Link to="/policy">Privacy Policy</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default Footer;
