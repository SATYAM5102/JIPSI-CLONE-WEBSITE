import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import WhyJipsiContent from '../components/WhyJipsiContent/WhyJipsiContent';

const WhyJipsiPage = () => {
  return (
    <div>
      <Head>
        <title>Why JIPSI - JIPSI</title>
      </Head>

      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Why JIPSI" 
          breadcrumb="Home » About Us » Why JIPSI" 
          backgroundImage="/images/why-jipsi-banner.jpg" // Add your banner image
        />
        <WhyJipsiContent />
      </main>
    </div>
  );
};

export default WhyJipsiPage;