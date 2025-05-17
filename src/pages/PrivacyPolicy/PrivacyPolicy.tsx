import { motion } from 'framer-motion';
import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p className={styles.text}><b>Effective Date:</b> March 27, 2025</p>
      <p className={styles.text}>
        <b>GK Capital Ventures LLC</b>
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and protect your information when you visit our website or use our services.
      </p>
      <h2 className={styles.subtitle}>
        1. Company Information
      </h2>
      <ul className={styles.list}>
        <li><b>Company Name:</b>GK Capital Ventures LLC</li>
        <li><b>Entity Number:</b>202461915226</li>
        <li><b>Registered Address:</b>14852 Ventura Blvd, Unit 122, Sherman Oaks, CA 91403</li>
        <li><b>Email:</b>info@gk.exchange</li>
      </ul>
      <h2 className={styles.subtitle}>
        2. What Information We Collect
      </h2>
      <ul className={styles.list}>
        We may collect:
        <li>Personal information you voluntarily provide (name, email, phone)</li>
        <li>Technical data such as browser type, IP address, and usage statistics</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>
      <h2 className={styles.subtitle}>
        3. How We Use Your Information
      </h2>
      <ul className={styles.list}>
        We use the collected information to:
        <li>Providing and supporting our services</li>
        <li>Communicating with you</li>
        <li>Improving our website and offerings</li>
        <li>Complying with legal obligations</li>
      </ul>
      <h2 className={styles.subtitle}>
        4. How We Share Your Information
      </h2>
      <ul className={styles.list}>
        We do not sell or rent your personal information. We may share data with:
        <li>Contracted service providers</li>
        <li>Legal authorities when required by law</li>
      </ul>
      <h2 className={styles.subtitle}>
        5. Data Security
      </h2>
      <p className={styles.text}>
        We implement technical and organizational measures to protect your data against unauthorized access, disclosure, alteration, or destruction.
      </p>
      <h2 className={styles.subtitle}>
        6. Your Rights
      </h2>
      <ul className={styles.list}>
        Depending on your location, you may have the right to:
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion</li>
        <li>Opt out of certain data uses</li>
        <p className={styles.text}>
          For California residents, we comply with the 
          <b>California Consumer Privacy Act (CCPA).</b>
        </p>
      </ul>
      <h2 className={styles.subtitle}>
        7. Contact Us
      </h2>
      <p className={styles.text}>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className={styles.text}>
        <b>GK Capital Ventures LLC</b>
        Email: info@gk.exchange
        Address: 14852 Ventura Blvd, Unit 122, Sherman Oaks, CA 91403
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
