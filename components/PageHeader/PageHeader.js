import styles from './PageHeader.module.css';

const PageHeader = ({ title, breadcrumb, backgroundImage }) => {
  // Create a style object for the background image
  const headerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
  };

  return (
    // Apply the style and a conditional class
    <div 
      className={`${styles.header} ${backgroundImage ? styles.withImage : ''}`} 
      style={headerStyle}
    >
      <div className={styles.overlay}></div> {/* Add an overlay for text readability */}
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.breadcrumb}>{breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageHeader;