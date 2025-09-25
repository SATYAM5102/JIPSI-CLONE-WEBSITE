// pages/index.js - CORRECT VERSION

import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';
import DoctorsSection from '../components/DoctorsSection/DoctorsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import VideoGallerySection from '../components/VideoGallerySection/VideoGallerySection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JIPSI - Play. Live. Painfree.</title>
        <meta name="description" content="India's First Exclusive Sports & Musculoskeletal Radiology Institute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <DoctorsSection />
        <ServicesSection />
        <TestimonialsSection />
        <VideoGallerySection />
      </main>
    </div>
  )
}
