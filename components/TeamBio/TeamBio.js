import styles from './TeamBio.module.css';
import Image from 'next/image';

const TeamBio = ({ member }) => {
  if (!member) {
    return <p>Team member not found.</p>;
  }

  return (
    <section className={styles.bioSection}>
      {/* UPDATED: Change className from "grid" to "bioContainer" */}
      <div className={`container ${styles.bioContainer}`}> 
        <div className={styles.imageContainer}>
          <Image src={member.image} alt={member.name} width={400} height={500} style={{ objectFit: 'cover', borderRadius: '10px' }} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>{member.name}</h1>
          <h2 className={styles.title}>{member.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: member.bio }} />
        </div>
      </div>
    </section>
  );
};

export default TeamBio;