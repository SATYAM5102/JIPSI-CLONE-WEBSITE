import { useState } from 'react';
import styles from './VideoGalleryContent.module.css';
import Image from 'next/image';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

// Demo Data
const allVideos = [
  { embedUrl: 'https://www.youtube.com/embed/kvRndvdHvVo?si=dhRhc1WfpsQ3z3dV', category: 'Sports' },
  { embedUrl: 'https://www.youtube.com/embed/I6NxMo_E8s8?si=HonQcu4wT08eiV5U', category: 'Achievements' },
  { embedUrl: 'https://www.youtube.com/embed/kvRndvdHvVo?si=dhRhc1WfpsQ3z3dV', category: 'Conferences' },
  { embedUrl: 'https://www.youtube.com/embed/I6NxMo_E8s8?si=HonQcu4wT08eiV5U', category: 'Success' },
  // Add more videos here...
];

const categories = ['All', 'Sports', 'Achievements', 'Conferences', 'Success', 'Testimonials'];

// Custom thumbnail player for the grid
const GridVideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  if (isPlaying) {
    return (
      <div className={styles.playerWrapper}>
        <ReactPlayer url={video.youtubeLink} width="100%" height="100%" controls playing onEnded={() => setIsPlaying(false)} />
      </div>
    );
  }
  return (
    <div className={styles.playerWrapper} onClick={() => setIsPlaying(true)}>
      <Image src={video.thumbnail} alt="Video thumbnail" fill style={{ objectFit: 'cover' }}/>
      <div className={styles.playIconOverlay}><FaPlay size={30} /></div>
    </div>
  );
};

const VideoGalleryContent = () => {
  const [filter, setFilter] = useState('All');
  const filteredVideos = allVideos.filter(video => filter === 'All' || video.category === filter);

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <h2 className={`section-title ${styles.pageTitle}`}>Video gallery</h2>
        <div className={styles.description}>
          <p>Explore our Video Gallery to learn more about the innovative treatments and services we offer at JIPSI. From patient success stories to informative videos on pain management and sports injury recovery, our gallery provides valuable insights into how we help you regain your health and vitality. Watch and discover the difference our expert care can make.</p>
        </div>
        
        {/* Main Featured Video using iframe */}
        <div className={styles.featuredVideo}>
          <div className={styles.playerWrapper}>
            <iframe
              src="https://www.youtube.com/embed/kvRndvdHvVo?si=dhRhc1WfpsQ3z3dV" // Main featured video embed URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className={styles.subscribeContainer}>
          <a href="https://www.youtube.com/@jipsi1" target="_blank" rel="noopener noreferrer" className={styles.subscribeButton}>
            <FaYoutube /> Subscribe to JIPSI
          </a>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={filter === cat ? styles.active : ''}>
              {cat === 'Sports' ? 'Sports persons at JIPSI' : cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        {/* UPDATED: Video Grid now uses iframe directly */}
        <div className={styles.videoGrid}>
          {filteredVideos.map((video, index) => (
            <div key={index} className={styles.playerWrapper}>
              <iframe
                src={video.embedUrl}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGalleryContent;