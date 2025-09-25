import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { withBasePath } from '../../utils/basePath';

// NEW: A nested data structure for our navigation links
const navLinksData = [
  { title: 'Home', href: '/' },
  { 
    title: 'About Us',
    href: '/about',
    children: [
      { title: 'Vision and Mission', href: '/vision-mission' },
      { title: 'Our Team', href: '/team' },
      { title: 'Why JIPSI', href: '/why-jipsi' },
    ]
  },
  { 
    title: 'Services',
    children: [
      { title: 'Sports Injury Management', href: '#' },
      { title: 'Musculoskeletal Interventions', href: '#' },
      { title: 'Chronic Pain Management', href: '#' },
      { title: 'Joint and Musculoskeletal Imaging', href: '#' },
      { 
        title: 'Regenerative Therapy', 
        href: '#',
        subChildren: [ // Nested sub-menu
          { title: 'Stem Cell Injections', href: '#' },
          { title: 'PRP Injections', href: '#' },
          { title: 'Bone Marrow aspirate concentrate', href: '#' },
          { title: 'Microfragmented adipose tissue', href: '#' },
        ]
      },
      { title: 'Expert 2nd opinion', href: '#' },
      { title: 'Manual Therapy', href: '#' },
      { title: 'Post Operative Rehabilitation', href: '#' },
    ]
  },
  { 
    title: 'Gallery',
    children: [
      { title: 'Image', href: '#' },
      { title: 'Video', href: '#' },
    ]
  },
  { title: 'Blog', href: '#' },
  { 
    title: 'Education',
    children: [
      { title: 'Our Workshop/Fellowship', href: '#' },
      { title: 'Online Courses', href: '#' },
      { title: 'Free Education Videos', href: '#' },
    ]
  },
  { title: 'Contact', href: '/contact' },
  { title: 'Login', href: '/login' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // NEW: State for accordions

  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubMenu(null); // Reset submenus when closing the main menu
  };

  const handleSubMenuToggle = (title) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.topBar}>
          <div className="container"> {/* Use global container for top bar content */}
            <span>Call & WhatsApp: +91 7027026462, +91 7027026463</span>
          </div>
        </div>

        <nav className={styles.mainNav}>
            {/* NEW: Inner container for alignment */}
          <div className={`container ${styles.navContainer}`}>
            <div className={styles.logoContainer}>
                <Link href={withBasePath('/')}> 
                <Image src={withBasePath('/images/logo.svg')} alt="JIPSI Logo" width={120} height={50} priority />
                </Link>
            </div>

            <div className={styles.desktopNavLinks}>
                {navLinksData.map((item) => (
                <div key={item.title} className={styles.navItem}>
                    <Link href={item.href ? withBasePath(item.href) : '#'} className={styles.navLink}>
                    {item.title}
                    {item.children && <FaChevronDown className={styles.chevron} />}
                    </Link>
                    {item.children && (
                    <ul className={styles.dropdown}>
                        {item.children.map((child) => (
                        <li key={child.title} className={child.subChildren ? styles.hasSubMenu : ''}>
                            <Link href={child.href === '#' ? '#' : withBasePath(child.href)}>{child.title}</Link>
                            {child.subChildren && (
                            <ul className={styles.subMenu}>
                                {child.subChildren.map((subChild) => (
                                <li key={subChild.title}><Link href={subChild.href === '#' ? '#' : withBasePath(subChild.href)}>{subChild.title}</Link></li>
                                ))}
                            </ul>
                            )}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                ))}
            </div>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* NEW: Overlay for when the menu is open */}
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

      {/* NEW: Full-height slide-in sidebar */}
      <nav className={`${styles.mobileMenuSidebar} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
          <FaTimes />
        </button>
        <ul>
          {navLinksData.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <>
                  <button onClick={() => handleSubMenuToggle(item.title)} className={styles.accordionButton}>
                    {item.title}
                    {openSubMenu === item.title ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openSubMenu === item.title && (
                    <ul className={styles.subMenu}>
                      {item.children.map((child) => (
                        <li key={child.title}><Link href={child.href === '#' ? '#' : withBasePath(child.href)} onClick={toggleMenu}>{child.title}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href === '#' ? '#' : withBasePath(item.href)} onClick={toggleMenu}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;