import React from 'react';
import styles from './Contacts.module.css';
import { Link } from '@remix-run/react';
import { CONTACTS } from './mock';

const Contacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div className={styles.containerContacts}>
        {CONTACTS.map((contact) => (
          <div className={styles.containerContact}>
            <img
              src={contact.logo}
              alt={contact.title}
              className={styles.logo}
            />
            <div className={styles.text} key={contact.id}>
              <span className={styles.name}>{contact.title}</span>
              <Link className={styles.link} to={contact.link}>
                {contact.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
