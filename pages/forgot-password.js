import { useState } from 'react';
import Head from 'next/head';
import AuthForm from '../components/AuthForm/AuthForm';
import styles from '../styles/AuthPages.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div>
      <Head>
        <title>Reset Password - JIPSI</title>
      </Head>
      <main>
        <AuthForm>
          <h2 className={styles.title}>Reset Password</h2>
          <p className={styles.links}>Enter your email address to receive a password reset link.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-Mail Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className={styles.submitButton}>Send Password Reset Link</button>
          </form>
        </AuthForm>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;