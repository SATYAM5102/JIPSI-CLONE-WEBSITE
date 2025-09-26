import Head from 'next/head';
import PageHeader from '../../components/PageHeader/PageHeader';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { withBasePath } from '@/utils/basePath';

const ImageGalleryPage = () => {
  return (
    <div>
      <Head>
        <title>Image Gallery - JIPSI</title>
      </Head>
      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Image Gallery" 
          breadcrumb="Home » Image Gallery" 
          backgroundImage={withBasePath("/images/about-banner.jpg")} // Add your banner image
        />
        <ImageGallery />
      </main>
    </div>
  );
};

export default ImageGalleryPage;