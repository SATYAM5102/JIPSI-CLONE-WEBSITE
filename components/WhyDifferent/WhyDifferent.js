import styles from './WhyDifferent.module.css';
import Image from 'next/image';

const features = [
  { icon: '/images/icons/feature-team.png', text: 'Team of Internationally Acclaimed Experts' },
  { icon: '/images/icons/feature-diagnosis.png', text: 'Timely and Pin Point Diagnosis' },
  { icon: '/images/icons/feature-treatment.png', text: 'Complete End-to-end Non-surgical treatment under single roof' },
  { icon: '/images/icons/feature-medicine.png', text: 'Regenerative Medicine' },
  { icon: '/images/icons/feature-tech.png', text: 'Latest equipment and technology' },
];

const WhyDifferent = () => {
  return (
    <section className={styles.whyDifferentSection}>
      <div className="container">
        <h2 className={styles.title}>Why we&apos;re Different</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Image src={feature.icon} alt={feature.text} width={100} height={100} />
              </div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;