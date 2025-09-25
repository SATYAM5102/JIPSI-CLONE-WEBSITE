// components/TeamGrid/TeamGrid.js

import styles from './TeamGrid.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Ensure FaWhatsapp is imported

// Data for all team members (ensure you have the physiotherapist data here)
const teamData = {
  doctors: [
    { name: "DR. PRABLEEN KAUR", image: "/images/dr-prableen-kaur.jpg", slug: "drprableenkaur" },
    { name: "DR. GAURAV KANT SHARMA", image: "/images/dr-gaurav-kant-sharma.jpg", slug: "drgauravkantsharma" }
  ],
  physiotherapists: [
    { name: "DR. SAILAJA KHATIWARA", image: "/images/dr-sailaja-khatiwara.jpg", slug: "drsailajakhatiwara" },
    { name: "DR. SITARAM SHARMA", image: "/images/dr-sitaram-sharma.jpg", slug: "drsitaramsharma" }
  ]
};

const TeamCard = ({ member }) => (
  <div className={styles.card}>
    <Link href={`/team/${member.slug}`}>
      <div className={styles.imageWrapper}>
        <Image src={member.image} alt={member.name} width={400} height={400} style={{ objectFit: 'cover' }} />
      </div>
    </Link>
    <div className={styles.cardContent}>
      <h3 className={styles.name}>{member.name}</h3>
      <div className={styles.socialLinks}>
        <Link href={`/team/${member.slug}`} className={styles.icon} aria-label="View Bio">
          <FaGlobe />
        </Link>
        <a href="https://wa.me/918976410291" className={styles.icon} aria-label="Send WhatsApp Message" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:satyamtiwari1401@gmail.com" className={styles.icon} aria-label="Send Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </div>
);

const TeamGrid = () => {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.category}>
          <h2 className="section-title">Our Expert Doctors</h2>
          <p className="section-description">
            At JIPSI, we take pride in our team of highly skilled and compassionate doctors, dedicated to providing personalized care for your pain and sports-related injuries. With years of expertise in advanced treatments, our specialists use the latest techniques to ensure effective recovery and improved quality of life. Trust in our expert care for your health and well-being at JIPSI, Jaipur.
          </p>
          <div className={styles.gridWrapper}>
            <div className={styles.grid}>
              {teamData.doctors.map(member => <TeamCard key={member.name} member={member} />)}
            </div>
          </div>
        </div>

        <div className={styles.category}>
          <h2 className="section-title">Our Physiotherapists</h2>
          {/* 
            ==============================================
            === THIS IS THE FIX ===
            ==============================================
          */}
          <div className={styles.gridWrapper}>
            <div className={styles.grid}>
              {teamData.physiotherapists.map(member => <TeamCard key={member.name} member={member} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;