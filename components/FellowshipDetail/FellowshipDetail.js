import styles from './FellowshipDetail.module.css';
import Image from 'next/image';

const FellowshipDetail = ({ fellowship }) => {
  if (!fellowship) return <p>Fellowship program not found.</p>;

  return (
    <section className={styles.detailSection}>
      <div className="container">
        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>{fellowship.title}</h1>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: fellowship.description }} />

          <hr className={styles.divider} />

          {/* About Faculty Section */}
          <div className={styles.facultySection}>
            <h2 className={styles.sectionTitle}>{fellowship.faculty.title}</h2>
            <div className={styles.facultyGrid}>
              <div className={styles.facultyText}>
                <p><strong>Faculty name:</strong> {fellowship.faculty.name}</p>
                <p><strong>Qualification:</strong> {fellowship.faculty.qualification}</p>
                <p><strong>Experience:</strong> {fellowship.faculty.experience}</p>
                <p><strong>Special About Faculty</strong></p>
                <p>{fellowship.faculty.bio}</p>
              </div>
              <div className={styles.facultyImage}>
                <Image src={fellowship.faculty.image} alt={fellowship.faculty.name} width={300} height={400} style={{ objectFit: 'cover', borderRadius: '8px' }}/>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />
          
          {/* Course Curriculum Section */}
          <div className={styles.curriculumSection}>
            <h2 className={styles.sectionTitle}>{fellowship.curriculum.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: fellowship.curriculum.content }} />
          </div>

          {/* Application Process Section */}
          <div className={styles.applicationSection}>
            <div dangerouslySetInnerHTML={{ __html: fellowship.applicationProcess.content }} />
          </div>

          {/* Meta Info & Brochure */}
          <div className={styles.metaInfo}>
            <p><strong>Duration:</strong> {fellowship.meta.duration}</p>
            <p><strong>Start Date:</strong> {fellowship.meta.startDate}</p>
            <p><strong>End Date:</strong> {fellowship.meta.endDate}</p>
            <p><strong>Fees:</strong> {fellowship.meta.fees}</p>
          </div>
          <a href={fellowship.brochureUrl} className={styles.downloadButton} target="_blank" rel="noopener noreferrer">
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default FellowshipDetail;