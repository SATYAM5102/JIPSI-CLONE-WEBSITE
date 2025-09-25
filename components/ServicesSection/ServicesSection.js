import styles from './ServicesSection.module.css';
import Image from 'next/image';

// Your updated list with all 10 services
const services = [
  { imgSrc: '/images/icons/sports-injury.jpg', name: 'Sports Injury Management' },
  { imgSrc: '/images/icons/manual-therapy.jpg', name: 'Manual Therapy' },
  { imgSrc: '/images/icons/post-operative.jpg', name: 'Post Operative Rehabilitation' },
  { imgSrc: '/images/icons/regenerative-therapy.jpg', name: 'Regenerative Therapy' },
  { imgSrc: '/images/icons/prp-injections.jpg', name: 'PRP Injections' },
  { imgSrc: '/images/icons/chronic-pain.jpg', name: 'Chronic Pain Management' },
  { imgSrc: '/images/icons/international.jpg', name: 'International Expert Opinion' },
  { imgSrc: '/images/icons/joint-muskoskeletal.jpg', name: 'Joint & Muskoskeletal Imaging' },
  { imgSrc: '/images/icons/muskoskeletal.jpg', name: 'Muskoskeletal Interventions' },
  { imgSrc: '/images/icons/stem-cell.jpg', name: 'Stem Cells Injections' }
];

const ServicesSection = () => {
  // We duplicate the services array to create a seamless loop for the animation
  const extendedServices = [...services, ...services];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.container}>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-description">
            At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, we offer a comprehensive range of services to help you manage pain and recover from sports injuries. Our expert team provides personalized treatments, including advanced pain management techniques, rehabilitation, and injury prevention. Discover our specialized care designed to meet your unique needs and get back to doing what you love.
            </p>
            
            {/* This wrapper is essential to hide the overflowing content */}
            <div className={styles.servicesContainer}>
            <div className={styles.servicesGrid}>
                {extendedServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                    <div className={styles.iconWrapper}>
                    <Image
                        src={service.imgSrc}
                        alt={service.name}
                        width={100} // Increased size
                        height={120} // Increased size
                    />
                    </div>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                </div>
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;