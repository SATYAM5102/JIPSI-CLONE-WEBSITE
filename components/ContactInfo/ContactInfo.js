import styles from './ContactInfo.module.css';
import Image from 'next/image'; // Make sure Image is imported
import { withBasePath } from '../../utils/basePath';

const ContactInfo = () => {
  return (
    <section className={styles.infoSection}>
      <div className={`container ${styles.grid}`}>
        {/* Card 1: Address */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Image src={withBasePath('/images/icons/icon-address.png')} alt="Address Icon" width={60} height={60} />
          </div>
          <h3>Our address</h3>
          <p>A-22,Gandhi Nagar Railway station Main road, Anta Colony, Bajaj Nagar, Jaipur, Rajasthan 302015 (INDIA)</p>
        </div>
        
        {/* Card 2: Phone */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Image src={withBasePath('/images/icons/icon-phone.png')} alt="Phone Icon" width={60} height={60} />
          </div>
          <h3>Phone number</h3>
          <p>91-141-4107532</p>
          <p>Mobile: +917027026462</p>
        </div>
        
        {/* Card 3: Email */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Image src={withBasePath('/images/icons/icon-email.png')} alt="Email Icon" width={60} height={60} />
          </div>
          <h3>Email Address</h3>
          <p>jipsihealth@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;