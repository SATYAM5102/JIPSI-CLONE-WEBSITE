import styles from './HeroSection.module.css';
import Image from 'next/image';
import { withBasePath } from '../../utils/basePath';

const HeroSection = () => {
  return (
    <section id="homepageHero" className={styles.hero}>
      <div className={styles.heroImageContainer}>
        {/* Desktop Image */}
        <div className={styles.desktopImage}>
          <Image
            src={withBasePath('/images/hero-background.jpg')}
            alt="Doctors reviewing medical scans"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority={true}
          />
        </div>

        {/* Mobile Image - NEW */}
        <div className={styles.mobileImage}>
          <Image
            src={withBasePath('/images/hero-background-mobile.jpg')} // The new mobile-specific image
            alt="Doctors reviewing medical scans"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }} // Focus on the top part
            quality={80} // Quality can be slightly lower for mobile
            priority={true}
          />
        </div>
      </div>

      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1>INDIA’S FIRST EXCLUSIVE SPORTS & MUSCULOSKELETAL RADIOLOGY INSTITUTE</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;