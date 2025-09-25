import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Form */}
          <div className={styles.formContainer}>
            <h2 className={styles.title}>Leave us a message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone No." required />
              <input type="email" placeholder="Your Email" required />
              <select required>
                <option value="">What specialty are you looking for?</option>
                <option value="chronic-pain">Chronic Pain Treatment</option>
                <option value="sports-injury">Sports Injury Treatment</option>
                <option value="regenerative">Regenerative Therapies</option>
              </select>
              <textarea placeholder="Your Message" rows="5" required></textarea>
              {/* Note: A real captcha requires more complex integration */}
              <div className={styles.captcha}>
                <span>Security Code: <strong>ymr64kvs</strong></span>
                <input type="text" placeholder="Insert Security Code" required />
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>

          {/* Right Side: Map */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.9839190282914!2d75.800075!3d26.872252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db54d92d68721%3A0x5915f349c4d55690!2sJIPSI%20(Jaipur%20Institute%20of%20Pain%20%26%20Sports%20Injuries)!5e0!3m2!1sen!2sin!4v1758781612486!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;