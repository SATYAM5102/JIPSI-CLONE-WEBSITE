import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import WhyJipsi from '../components/WhyJipsi/WhyJipsi';
import WhyDifferent from '../components/WhyDifferent/WhyDifferent';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us - JIPSI</title>
      </Head>

      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="About Us" 
          breadcrumb="Home » About Us" 
          backgroundImage="/images/about-banner.jpg" 
        />
        <WhyJipsi />
        <WhyDifferent />
      </main>
    </div>
  );
};

export default AboutPage;