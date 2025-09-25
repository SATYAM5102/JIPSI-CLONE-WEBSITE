import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
            <div className={styles.grid}>
            {/* Column 1: About & Working Hours */}
            <div className={styles.about}>
                <Image src="/images/logo.svg" alt="JIPSI Logo" width={120} height={50} />
                <p>
                India’s First Exclusive Sports & Musculoskeletal Radiology Institute that Encourages the Future of Sports in India through state-of-the-art facility and accomplished team of Internationally renowned doctors.
                </p>
                <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                </div>
                {/* Working Hours moved here */}
                <div className={styles.hours}>
                <h4>Working Hours</h4>
                <p>Mon-Sat: 10:00AM – 7:00PM</p>
                <p>Sunday: Off</p>
                </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className={styles.links}>
                <h4>Useful Links</h4>
                <ul>
                <li><Link href="#">Why JIPSI</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Cancellations & Returns</Link></li>
                <li><Link href="#">Sitemap</Link></li> {/* Added Sitemap */}
                </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className={styles.contact}>
                <h4>Contact Us</h4>
                {/* Corrected phone number format */}
                <p><strong>Phone Number:</strong> +91 7027026462, 91-141-4107532</p>
                <p>+91 7027026463</p>
                <p><strong>Email:</strong> jipsihealth@gmail.com</p>
                <p><strong>Address:</strong> A-22, Gandhi Nagar Railway station Main road, Anta Colony, Bajaj Nagar, Jaipur, Rajasthan 302015 (INDIA)</p>
            </div>
            </div>
            
            <div className={styles.copyright}>
            <p>Copyright © JIPSI. All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;