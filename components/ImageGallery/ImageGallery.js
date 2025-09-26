import { useState } from 'react';
import styles from './ImageGallery.module.css';
import Image from 'next/image';

// Import the lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { withBasePath } from '@/utils/basePath';

// DEMO DATA: In a real app, this would come from a CMS or API
const allImages = [
  { src: withBasePath('/images/gallery/sports-1.jpg'), category: 'Sports' },
  { src: withBasePath('/images/gallery/achievement-1.jpg'), category: 'Achievements' },
  { src: withBasePath('/images/gallery/conference-1.jpg'), category: 'Conferences' },
  { src: withBasePath('/images/gallery/success-1.jpg'), category: 'Success' },
  { src: withBasePath('/images/gallery/testimonial-1.jpg'), category: 'Testimonials' },
  { src: withBasePath('/images/gallery/sports-2.jpg'), category: 'Sports' },
  { src: withBasePath('/images/gallery/achievement-1.jpg'), category: 'Achievements' },
  { src: withBasePath('/images/gallery/conference-1.jpg'), category: 'Conferences' },
  // Add more images for all categories... (at least 9 to see the "View More" button work)
  { src: withBasePath('/images/gallery/sports-1.jpg'), category: 'Sports' },
  { src: withBasePath('/images/gallery/success-1.jpg'), category: 'Sports' },
];

const categories = ['All', 'Sports', 'Achievements', 'Conferences', 'Success', 'Testimonials'];

const ImageGallery = () => {
  const [filter, setFilter] = useState('All');
  const [visibleImages, setVisibleImages] = useState(9); // Initially show 9 images
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = allImages.filter(image => 
    filter === 'All' || image.category === filter
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button 
              key={category} 
              className={filter === category ? styles.active : ''}
              onClick={() => {
                setFilter(category);
                setVisibleImages(9); // Reset count on filter change
              }}
            >
              {/* Special name for 'Sports' category */}
              {category === 'Sports' ? 'Sports persons at JIPSI' : category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          {filteredImages.slice(0, visibleImages).map((image, index) => (
            <div key={index} className={styles.imageWrapper} onClick={() => openLightbox(index)}>
              <Image src={image.src} alt={`Gallery image ${index + 1}`} width={400} height={300} style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleImages < filteredImages.length && (
          <div className={styles.viewMoreContainer}>
            <button 
              className={styles.viewMoreButton} 
              onClick={() => setVisibleImages(prev => prev + 9)}
            >
              View More
            </button>
          </div>
        )}
      </div>
      
      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredImages.map(img => ({ src: img.src }))}
        index={lightboxIndex}
      />
    </section>
  );
};

export default ImageGallery;