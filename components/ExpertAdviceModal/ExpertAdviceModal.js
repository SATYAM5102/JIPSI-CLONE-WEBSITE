import { useState, useEffect } from 'react'; // Import useState and useEffect
import styles from './ExpertAdviceModal.module.css';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { withBasePath } from '../../utils/basePath';

const ExpertAdviceModal = ({ isOpen, onClose }) => {
  // NEW: State to track if the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This effect will run when the "isSubmitted" state changes
  useEffect(() => {
    // If the form was just submitted...
    if (isSubmitted) {
      // ...wait for 3 seconds, then close the modal automatically.
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3000ms = 3 seconds

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  // NEW: Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    // In a real application, you would send the form data to a server here.
    setIsSubmitted(true); // Set the submitted state to true
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className={styles.logoContainer}>
          <Image src={withBasePath('/images/modal-logo-icon.png')} alt="JIPSI Icon" width={80} height={80} />
        </div>
        
        {/* === CONDITIONAL RENDERING: Show message OR form === */}
        {isSubmitted ? (
          // If submitted, show the "Thank You" message
          <div className={styles.thankYouMessage}>
            <h2>Thank You for Subscribing!</h2>
          </div>
        ) : (
          // Otherwise, show the title and the form
          <>
            <h2 className={styles.title}>Expert Advice</h2>
            <p className={styles.subtitle}>Received on <strong>JIPSI</strong> call and WhatsApp</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpertAdviceModal;