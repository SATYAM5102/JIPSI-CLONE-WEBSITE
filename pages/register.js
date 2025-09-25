import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthForm from '../components/AuthForm/AuthForm';
import PageHeader from '../components/PageHeader/PageHeader';
import styles from '../styles/AuthPages.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${name}!`);
    // In a real app, you would handle registration logic here
  };

  return (
    <div>
      <Head>
        <title>User Registration - JIPSI</title>
      </Head>
      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="User Registration" 
          breadcrumb="Home » User Registration"
          backgroundImage="/images/contact-banner.jpg" // Reusing the banner
        />
        <div className={styles.pageWrapper}> {/* Using the wrapper for background color */}
          <div className={styles.fullFormCard}>
            <h2 className={styles.title}>User Registration</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
              <input type="email" placeholder="E-Mail Address" required />
              <input type="tel" placeholder="Mobile No." required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <div className={styles.captcha}>
                <span>Security Code: <strong>khv9awq</strong></span>
                <input type="text" placeholder="Insert Security Code" required />
              </div>
              <button type="submit" className={styles.submitButton}>Register</button>
            </form>
            <p className={styles.links}>
              If you already have an account with us, please login at the <Link href="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;