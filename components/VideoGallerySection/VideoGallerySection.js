import { useState, useEffect } from 'react';
import styles from './VideoGallerySection.module.css';
import Slider from 'react-slick';

// Data now contains iframe embed URLs
const videos = [
  { embedUrl: 'https://www.youtube.com/embed/kvRndvdHvVo?si=dhRhc1WfpsQ3z3dV' },
  { embedUrl: 'https://www.youtube.com/embed/HWuawDYA8eY?si=XzMsNdmfv5Narpuq' },
  { embedUrl: 'https://www.youtube.com/embed/sv1FN98iN9U?si=XCySrvfBbXnqfK9w' },
  { embedUrl: 'https://www.youtube.com/embed/XehgpNxsj14?si=dkH9MddRBCSO9h_b' }
];

const VideoGallerySection = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992,  settings: { slidesToShow: 2 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '8%',
        }
      }
    ]
  };

  return (
    <section className={styles.videoGallerySection}>
      <div className="container">
        <h2 className="section-title">Video Gallery</h2>
        <p className="section-description">
          Explore our Video Gallery to learn more about the innovative treatments and services we offer at <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>. From patient success stories to informative videos on pain management and sports injury recovery, our gallery provides valuable insights into how we help you regain your health and vitality. Watch and discover the difference our expert care can make.
        </p>
        <div className={`${styles.sliderContainer} ${hasMounted ? styles.sliderReady : ''}`}>
          {hasMounted && (
            <Slider key={hasMounted ? 'slider-ready' : 'slider-loading'} {...settings}>
              {videos.map((video, index) => (
                <div key={index} className={styles.videoCard}>
                  <div className={styles.playerWrapper}>
                    <iframe
                      src={video.embedUrl}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;