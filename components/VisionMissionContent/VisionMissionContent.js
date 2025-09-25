import styles from './VisionMissionContent.module.css';
import Image from 'next/image';

const VisionMissionContent = () => {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <div className={styles.imageContainer}>
          <Image 
            src="/images/vision-main-photo.jpg" // Add the main page image here
            alt="Dr. Prableen Kaur and Dr. Gaurav Kant Sharma"
            width={1100} // Base width
            height={600} // Base height
            style={{ width: '100%', height: 'auto' }} // Make it responsive
          />
        </div>

        <div className={styles.visionBlock}>
          <h2 className={styles.title}>Our Vision</h2>
          <p>
            At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, we envision a world where individuals are not defined by pain or injury, but empowered by their ability to heal and live pain-free. Our vision is to be a beacon of hope, recovery, and resilience, offering <strong>minimally-invasive,</strong> cutting-edge solutions that bring healing and restoration to those suffering from <strong>pain, sports injuries,</strong> and <strong>musculoskeletal conditions.</strong> We strive to build a healthier, more active society where innovative treatments, compassionate care, and advanced technologies enable every patient to lead a vibrant, pain-free life. We aim to be the leading centre for cutting-edge <strong>sports injury treatment, chronic pain relief,</strong> and <strong>physical rehabilitation</strong> in India and beyond.
          </p>
        </div>

        <div className={styles.missionBlock}>
          <h2 className={styles.title}>Our Mission</h2>
          <p>
            Our mission at <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span> is simple: to revolutionize pain management and rehabilitation through personalized, non-surgical treatments that are rooted in the latest medical advancements. We are committed to helping each individual not only recover but thrive in their everyday lives. By blending scientific innovation, advanced diagnostic tools, compassionate care, and a holistic approach, we aim to provide lasting relief, accelerate healing, and restore the confidence and freedom to pursue an active lifestyle. At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, we are passionate about making pain management accessible, effective, and transformative for all. We aim to be the trusted partner in every patient’s rehabilitation journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionContent;