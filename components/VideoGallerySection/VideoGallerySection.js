import styles from './VideoGallerySection.module.css';
import Slider from 'react-slick';
import VideoPlayerCard from './VideoPlayerCard'; // Import our new self-contained component
import { withBasePath } from '../../utils/basePath';

const videos = [
  { thumbnail: withBasePath('/images/video-thumb-1.jpg'), youtubeLink: 'https://www.youtube.com/watch?v=sEe7pl4gG5g' },
  { thumbnail: withBasePath('/images/video-thumb-2.jpg'), youtubeLink: 'https://www.youtube.com/watch?v=FLeFfJ1a4iQ' },
  { thumbnail: withBasePath('/images/video-thumb-3.jpg'), youtubeLink: 'https://www.youtube.com/watch?v=uA0GfjS_g5g' },
  { thumbnail: withBasePath('/images/video-thumb-4.jpg'), youtubeLink: 'https://www.youtube.com/watch?v=PbiwT-8I92g' }
];

const VideoGallerySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className={styles.videoGallerySection}>
      <div className="container">
        <h2 className="section-title">Video Gallery</h2>
        <p className="section-description">
          Explore our Video Gallery to learn more about the innovative treatments and services we offer at <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>. From patient success stories to informative videos on pain management and sports injury recovery, our gallery provides valuable insights into how we help you regain your health and vitality. Watch and discover the difference our expert care can make.
        </p>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                {/* Render our new component and pass the video data to it */}
                <VideoPlayerCard video={video} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;