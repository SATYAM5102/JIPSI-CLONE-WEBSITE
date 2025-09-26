import { useState, useEffect } from 'react';
import styles from './ServicesSection.module.css';
import Image from 'next/image';
import Slider from 'react-slick';

const services = [
  { imgSrc: '/images/icons/sports-injury.jpg', name: 'Sports Injury Management' },
  { imgSrc: '/images/icons/manual-therapy.jpg', name: 'Manual Therapy' },
  { imgSrc: '/images/icons/post-operative.jpg', name: 'Post Operative Rehabilitation' },
  { imgSrc: '/images/icons/regenerative-therapy.jpg', name: 'Regenerative Therapy' },
  { imgSrc: '/images/icons/prp-injections.jpg', name: 'PRP Injections' },
  { imgSrc: '/images/icons/chronic-pain.jpg', name: 'Chronic Pain Management' },
  { imgSrc: '/images/icons/international.jpg', name: 'International Expert Opinion' },
  { imgSrc: '/images/icons/joint-muskoskeletal.jpg', name: 'Joint & Muskoskeletal Imaging' },
  { imgSrc: '/images/icons/muskoskeletal.jpg', name: 'Muskoskeletal Interventions' },
  { imgSrc: '/images/icons/stem-cell.jpg', name: 'Stem Cells Injections' }
];

const ServicesSection = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true, // This creates the seamless loop
    speed: 500, // Standard transition speed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // A normal, consistent speed
    arrows: false,
    
    // Default setting for Desktops
    slidesToShow: 5,

    // Detailed breakpoints for all screen sizes
    responsive: [
      {
        breakpoint: 1400, // Large screens
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200, // Standard laptops
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992, // Tablets (Landscape)
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Tablets (Portrait)
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576, // Mobile phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-description">
          At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, we offer a comprehensive range of services to help you manage pain and recover from sports injuries. Our expert team provides personalized treatments, including advanced pain management techniques, rehabilitation, and injury prevention. Discover our specialized care designed to meet your unique needs and get back to doing what you love.
        </p>
        
        <div className={`${styles.sliderContainer} ${hasMounted ? styles.sliderReady : ''}`}>
          {hasMounted && (
            <Slider key={hasMounted ? 'slider-ready' : 'slider-loading'} {...settings}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src={service.imgSrc}
                      alt={service.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;