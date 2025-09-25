import Head from 'next/head';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactSection from '../components/ContactSection/ContactSection';
import ContactInfo from '../components/ContactInfo/ContactInfo';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - JIPSI</title>
        <meta name="description" content="Get in touch with JIPSI for expert advice and appointments." />
      </Head>

      <main>
        {/* UPDATED: Pass the background image URL as a prop */}
        <PageHeader 
          title="Contact Us" 
          breadcrumb="Home » Contact Us" 
          backgroundImage="/images/contact-banner.jpg" 
        />
        <ContactSection />
        <ContactInfo />
      </main>
    </div>
  );
};

export default ContactPage;