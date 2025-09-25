// components/VideoGallerySection/VideoPlayerCard.js

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import styles from './VideoGallerySection.module.css'; // We can reuse the same styles

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoPlayerCard = ({ video }) => {
  // Each card now manages its own "is playing" state
  const [isPlaying, setIsPlaying] = useState(false);

  // If the card is playing, show the ReactPlayer
  if (isPlaying) {
    return (
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={video.youtubeLink}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          // When the video ends, switch back to the thumbnail
          onEnded={() => setIsPlaying(false)} 
        />
      </div>
    );
  }

  // Otherwise, show our custom thumbnail
  return (
    <div className={styles.playerWrapper} onClick={() => setIsPlaying(true)}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={video.thumbnail}
          alt="Video thumbnail"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.playIconOverlay}>
          <FaPlay size={40} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerCard;