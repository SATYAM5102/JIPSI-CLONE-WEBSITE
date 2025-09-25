import styles from './DoctorsSection.module.css';
import Image from 'next/image';
import { withBasePath } from '../../utils/basePath';

const DoctorsSection = () => {
  return (
    <section className={styles.doctorsSection}>
      <div className="container">
        <h2 className="section-title">Our Expert Doctors</h2>
        <p className="section-description">
          At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, we take pride in our team of highly skilled and compassionate doctors, dedicated to providing personalized care for your pain and sports-related injuries. With years of expertise in advanced treatments, our specialists use the latest techniques to ensure effective recovery and improved quality of life. Trust in our expert care for your health and well-being at <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, Jaipur.
        </p>
        <div className={styles.doctorsGrid}>
          {/* Doctor 1 */}
          <div className={styles.doctorCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={withBasePath('/images/dr-prableen-kaur.jpg')}
                alt="Dr. Prableen Kaur"
                width={300}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                // The className was targeting the inner img tag, but the wrapper handles the styles
              />
            </div>
            <h3 className={styles.doctorName}>DR. PRABLEEN KAUR</h3>
          </div>
          {/* Doctor 2 */}
          <div className={styles.doctorCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={withBasePath('/images/dr-gaurav-kant-sharma.jpg')}
                alt="Dr. Gaurav Kant Sharma"
                width={300}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h3 className={styles.doctorName}>DR. GAURAV KANT SHARMA</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;