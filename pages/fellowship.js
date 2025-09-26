import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import FellowshipContent from '../components/FellowshipContent/FellowshipContent';

const FellowshipPage = () => {
  return (
    <div>
      <Head>
        <title>Our Workshop/Fellowship - JIPSI</title>
      </Head>

      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Our Workshop/Fellowship" 
          breadcrumb="Home » Workshop/Fellowship" 
          backgroundImage="/images/education-banner.jpg" // Add your banner image
        />
        <FellowshipContent />
      </main>
    </div>
  );
};

export default FellowshipPage;