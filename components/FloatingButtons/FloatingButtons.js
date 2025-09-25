import styles from './FloatingButtons.module.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatingButtons = () => {
  return (
    // This is our new single container for both left and right elements
    <div className={styles.wrapper}>
      
      {/* Left Side: Social Icons */}
      <div className={styles.socialIcons}>
        <a href="tel:+917027026462" className={styles.icon} aria-label="Call Us">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/917027026462" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="WhatsApp Us">
          <FaWhatsapp />
        </a>
      </div>

      {/* Right Side: Contact Button */}
      <Link href="/contact" className={styles.contactButton}>
        CONTACT US
      </Link>

    </div>
  );
};

export default FloatingButtons;