import styles from './WhyJipsiContent.module.css';
import Image from 'next/image';
import { withBasePath } from '../../utils/basePath';

// Data for the sections
const infoCards = [
  { title: 'Team of Internationally acclaimed experts', content: 'Team of MSK & Sports Radiologist + Interventional Pain Physician + Sports and MSK Physiotherapists and rehabilitation experts' },
  { title: 'Timely and Pin Point Diagnosis', content: 'Clinical examination + In-house diagnostic Musculoskeletal Ultrasound + Expert interpretation of MRI of joints and Sports Injuries by our team ensures a complete pin point diagnosis of your condition' },
  { title: 'Complete End to End Non surgical Treatment Under single Roof', content: 'All possible non surgical treatment of your Sports Injury/ pain condition ranging from medication/ rehabilitation/ Interventional treatment/ Regenerative medicine present under same roof' },
  { title: 'Latest Equipment and technology', content: 'We are constantly updating our equipment and our practices to the best global standards, often leading the global practices in many areas of our practise' }
];

const services = [
    { name: 'Microfragmented Adipose Tissue', icon: withBasePath('/images/icons/service-adipose.png') },
    { name: 'Bone Marrow Aspirate Concentrate', icon: withBasePath('/images/icons/service-bone-marrow.png') },
    { name: 'Sports Injury Management', icon: withBasePath('/images/icons/service-sports-injury.png') },
    { name: 'Regenerative Therapy', icon: withBasePath('/images/icons/service-regenerative.png') },
    { name: 'Joint & Musculoskeletal Imaging', icon: withBasePath('/images/icons/service-imaging.png') },
    { name: 'Post Operative Rehabilitation', icon: withBasePath('/images/icons/service-rehab.png') },
    { name: 'PRP Injections', icon: withBasePath('/images/icons/service-prp.png') },
    { name: 'International Expert Opinion', icon: withBasePath('/images/icons/service-opinion.png') },
    { name: 'Chronic Pain Management', icon: withBasePath('/images/icons/service-pain.png') },
    { name: 'Manual Therapy', icon: withBasePath('/images/icons/service-manual.png') }
];

const WhyJipsiContent = () => {
  return (
    <>
      <section className={styles.mainContentSection}>
        <div className="container">
          <h2 className={styles.title}>India&apos;s First Exclusive Sports & Musculoskeletal Radiology Institute</h2>
          <div className={styles.textBlock}>
            {/* Add all the paragraphs from the original site here */}
            <p>At JIPSI , we bring together a team of internationally acclaimed experts dedicated to providing the highest standard of care for musculoskeletal and sports injuries. Our multidisciplinary team includes MSK and sports radiologist, interventional pain physician, physiotherapists, and rehabilitation specialists who work collaboratively to ensure you receive the most effective treatment.

We pride ourselves on offering timely, precise diagnoses through comprehensive clinical examinations, in-house musculoskeletal ultrasound, and expert interpretation of MRIs. This enables us to accurately identify your condition, ensuring targeted and effective treatment.
JIPSI provides complete, end-to-end non-surgical treatment for sports injuries and pain, all under one roof. From medication and rehabilitation to advanced interventional treatments and regenerative medicine, we offer a full spectrum of care without the need for surgical intervention.
We are committed to using the latest equipment and technology, continually updating our practices to stay at the forefront of global standards. In many areas of our practice, we are proud to lead the way in innovation and patient care.
Choose JIPSI for comprehensive, expert care that helps you recover faster and stronger.</p>
            {/* ... etc. */}
          </div>
          <div className={styles.infoGrid}>
            {infoCards.map((card, index) => (
              <div key={index} className={styles.infoCard}>
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.weDoBestSection}>
        <div className="container">
          <h2 className={styles.title}>What We Do Best</h2>
          <div className={styles.textBlock}>
            <p>At JIPSI, we specialize in providing effective, minimally-invasive treatments designed to reduce chronic pain and sports injuries without the need for surgery. Our comprehensive approach blends pharmacology, physiotherapy, and advanced pain management interventions to ensure a pain-free future, all with minimal side effects. Our team of experts is highly skilled in treating a wide range of injuries—from chronic pain to sports injuries—helping athletes and patients alike find lasting relief. We pride ourselves on offering personalized care, with a strong focus on accurately diagnosing the source of pain, allowing us to target treatment directly at the pain generator. In our commitment to excellence, we are proud to have launched India’s First Exclusive Sports & Musculoskeletal Radiology Institute, a milestone that has already helped numerous patients. Our vision is to become one of the top 10 stand-alone MSK centers in the world, shaping not only outstanding treatment but also education in the field.</p>
            <p>24x7 Support We are here to support you around the clock. Whether you&apos;re recovering from an injury or experiencing persistent pain, our compassionate team is ready to provide the care you need to get back to your best. For immediate assistance or to book an appointment, call us anytime. We’re here to offer you a path toward a pain-free, healthier future.</p>
            {/* ... other paragraphs ... */}
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} alt={`${service.name} icon`} width={50} height={50} />
                </div>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.collageSection}>
        <div className="container-wide">
          <h2 className={styles.title}>Celebrity Collage</h2>
          <div className={styles.imageCollage}>
            {/* Use your collage image here */}
            <Image src={withBasePath('/images/celebrity-collage.jpg')} alt="Celebrity Collage" width={1600} height={900} style={{width: '100%', height: 'auto'}} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJipsiContent;