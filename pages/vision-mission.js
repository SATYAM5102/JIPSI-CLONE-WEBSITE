import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import VisionMissionContent from '../components/VisionMissionContent/VisionMissionContent';

const VisionMissionPage = () => {
  return (
    <div>
      <Head>
        <title>Vision & Mission - JIPSI</title>
      </Head>

      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Vision / Mission" 
          breadcrumb="Home » About Us » Vision / Mission" 
          backgroundImage="/images/vision-banner.jpg" // Add your banner image here
        />
        <VisionMissionContent />
      </main>
    </div>
  );
};

export default VisionMissionPage;