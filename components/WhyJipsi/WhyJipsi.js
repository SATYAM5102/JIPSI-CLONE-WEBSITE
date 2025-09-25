import styles from './WhyJipsi.module.css';

// No more dynamic imports or state needed for this component.

const WhyJipsi = () => {
  return (
    <section className={styles.whyJipsiSection}>
      <div className="container">
        <h2 className={styles.title}>Why JIPSI</h2>
        <div className={styles.textBlock}>
          <p>At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span> , we bring together a team of internationally acclaimed experts dedicated to providing the highest standard of care for <strong>musculoskeletal and sports injuries</strong>. Our multidisciplinary team includes <strong>MSK and sports radiologist, interventional pain physician, physiotherapists,</strong> and <strong>rehabilitation specialists</strong> who work collaboratively to ensure you receive the most effective treatment.</p>
          <p>We pride ourselves on offering timely, precise diagnoses through comprehensive clinical examinations, in-house <strong>musculoskeletal ultrasound, </strong>and <strong>expert interpretation of MRIs.</strong> This enables us to accurately identify your condition, ensuring targeted and effective treatment.
          <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span> provides complete, end-to-end non-surgical treatment for sports injuries and pain, all under one roof. From medication and rehabilitation to advanced <strong>interventional treatments</strong> and <strong>regenerative medicine,</strong> we offer a full spectrum of care without the need for surgical intervention.
          We are committed to using the <strong>latest equipment and technology,</strong> continually updating our practices to stay at the forefront of global standards. In many areas of our practice, we are proud to lead the way in innovation and patient care.
          Choose <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span> for comprehensive, expert care that helps you recover faster and stronger.</p>
        </div>
        <div className="container-wide">
          <div className={styles.videoContainer}>
            <div className={styles.playerWrapper}>
              {/* 
              THIS IS THE NEW, DIRECT IFRAME EMBED.
              It replaces the ReactPlayer component entirely.
              */}
              <iframe 
                className={styles.iframe}
                src="https://www.youtube.com/embed/kvRndvdHvVo?si=G1emeirLoaMgcPJS" // The correct embed URL
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJipsi;