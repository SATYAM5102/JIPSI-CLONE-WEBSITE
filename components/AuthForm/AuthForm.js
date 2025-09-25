import styles from './AuthForm.module.css';

const AuthForm = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        {children}
      </div>
    </div>
  );
};

export default AuthForm;