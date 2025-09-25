import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import TeamGrid from '../components/TeamGrid/TeamGrid';

const TeamPage = () => {
  return (
    <div>
      <Head>
        <title>Our Team - JIPSI</title>
      </Head>

      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Our Team" 
          breadcrumb="Home » About Us » Our Team" 
          backgroundImage="/images/team-banner.jpg" // Add your banner image
        />
        <TeamGrid />
      </main>
    </div>
  );
};

export default TeamPage;