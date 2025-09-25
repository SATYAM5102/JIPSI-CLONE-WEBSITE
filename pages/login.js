import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthForm from '../components/AuthForm/AuthForm';
import styles from '../styles/AuthPages.module.css'; // We'll create a shared style file

// Demo user data
const demoUser = {
  email: 'test@example.com',
  password: 'password123'
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === demoUser.email && password === demoUser.password) {
      alert('Login successful!');
      // In a real app, you would redirect here: router.push('/dashboard');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div>
      <Head>
        <title>Sign In - JIPSI</title>
      </Head>
      <main>
        <AuthForm>
          <h2 className={styles.title}>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className={styles.submitButton}>Login</button>
          </form>
          <div className={styles.links}>
            <Link href="/register">Sign Up</Link> | <Link href="/forgot-password">Forgot Your Password?</Link>
          </div>
        </AuthForm>
      </main>
    </div>
  );
};

export default LoginPage;