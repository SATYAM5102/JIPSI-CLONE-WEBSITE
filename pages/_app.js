import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// // 1. Import the Poppins font from next/font/google
// import { Poppins } from 'next/font/google';

// // 2. Configure the font with the weights and subsets we need
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'], // Light, Regular, Medium, Semi-Bold, Bold
// });

function MyApp({ Component, pageProps }) {
  return (
    // 3. Apply the font's className to a wrapping div
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;