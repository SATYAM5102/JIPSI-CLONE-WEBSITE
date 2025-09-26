import Head from 'next/head';
import PageHeader from '../../components/PageHeader/PageHeader';
import VideoGalleryContent from '../../components/VideoGalleryContent/VideoGalleryContent';

const VideoGalleryPage = () => {
  return (
    <div>
      <Head>
        <title>Video Gallery - JIPSI</title>
      </Head>
      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Video Gallery" 
          breadcrumb="Home » Video Gallery" 
          backgroundImage="/images/about-banner.jpg" // Reusing the same banner
        />
        <VideoGalleryContent />
      </main>
    </div>
  );
};

export default VideoGalleryPage;