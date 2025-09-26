import { withBasePath } from '@/utils/basePath';
import styles from './FellowshipContent.module.css';
import Image from 'next/image';
import Link from 'next/link';

const FellowshipContent = () => {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        {/* --- Training at JIPSI Section --- */}
        <div className={styles.introBlock}>
          <h2 className={styles.mainTitle}>Training at JIPSI</h2>
          <h3 className={styles.subTitle}>About Fellowship</h3>
          <p>Jaipur Institute of Pain & Sports Injuries is one of the few Institute in India to start Dedicated Musculoskeletal Radiology Training Programs which Combines Clinical Skills with comprehensive training in Musculoskeletal Imaging including Musculoskeletal MRI, Musculoskeletal Ultrasound and all possible Musculoskeletal Interventions including Ultrasound Guided Interventions for Sports Injuries and internal derangement, all possible Rhuematological Interventions and all CT/C ARM  guided Interventions for pain management.  It also extensively covers and includes all sarcoma biopsies including ultrasound guided soft tissue sarcoma biopsies and CT guided bone tumors biopsies and Various Radiofrequency Ablation. </p>
          <p>A full time fellow trained at Jaipur Institute of Pain & Sports Injuries will be equipped to Independently practise  Clinical Musculoskeletal Radiology and ably  fulfill the role of both a treating Clinical Musculoskeletal Radiologist and  Core musculoskeletal Radiology Diagnostician.</p>
        </div>

        <hr className={styles.divider} />

        {/* --- 7 Days Observership Section --- */}
        <div className={styles.programBlock}>
          <div className={styles.programDetails}>
            <h2 className={styles.programTitle}>7 Days Observership in Musculoskeletal Radiology</h2>
            <div className={styles.metaInfo}>
              <span><strong>Duration:</strong> 7 Days</span>
              <span><strong>Fees:</strong> Rs. 85000.00</span>
              <span><strong>Start Date:</strong> 2025-09-01 09:00:00</span>
              <span><strong>End Date:</strong> 2025-09-01 18:00:00</span>
            </div>
            <p>At JIPSI, we practise clinical Musculoskeletal Radiology. During your 7 days observership here, you will be taught basics of Musculoskeletal Ultrasound and MRI with basics of Musculoskeletal Anatomy and will get to shadow reporting of Musculoskeletal MRI scans. Overview  of shoulder Ultrasound, ankle ultrasound , knee and hip Ultrasound will be taught in these 7 days while covering basics to advanced. Also during your short visit here, you will shadow Dr Gaurav Kant Sharma and Dr Prableen kaur along with the 2  full time  fellows  in seeing the patients, discussions while doing Msk Ultrasound, reporting Musculoskeletal MRI  and while performing MSK interventions where fine practical details will be taught to you. </p>
            <p>Radiologists having completed their residency and having minimum 6 years of experience post MD can apply for this observership program, zoom interview will be conducted for the applicant to confirm the intake.</p>
            <Link href="/fellowship/7-days-observership" className={styles.learnMoreButton}>Learn More</Link>
          </div>
          <div className={styles.programImage}>
            <Image src={withBasePath("/images/ccr-series-online-course.png")} alt="CCR Series Online Course" width={500} height={250} />
          </div>
        </div>

        <hr className={styles.divider} />

        {/* --- 6 Months Fellowship Section --- */}
        <div className={styles.programBlock}>
          <div className={styles.programDetails}>
            <h2 className={styles.programTitle}>6 months Fellowship in Clinical Musculoskeletal (MSK) Radiology</h2>
            <div className={styles.metaInfo}>
              <span><strong>Duration:</strong> 1 year</span>
              <span><strong>Fees:</strong> Rs. 290000.00</span>
              <span><strong>Start Date:</strong> 2025-11-01 00:00:00</span>
              <span><strong>End Date:</strong> 2026-04-30 21:00:00</span>
            </div>
            <p>Jaipur Institute of Pain & Sports Injury is North India’s first and Only Dedicated Musculoskeletal Radiology Clinic. Emphasis is on to train a fellow in clinical skills, Imaging skills and treatment skills using various Musculoskeletal Interventions. </p>
            <Link href="/fellowship/6-months-fellowship" className={styles.learnMoreButton}>Learn More</Link>
          </div>
          <div className={styles.programImage}>
            {/* Assuming a placeholder image */}
            <Image src="/images/ccr-series-online-course.png" alt="Fellowship" width={500} height={250} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipContent;