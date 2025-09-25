import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FloatingButtons from '../FloatingButtons/FloatingButtons';
import ExpertAdviceModal from '../ExpertAdviceModal/ExpertAdviceModal';

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // This line logs to the console to help us debug.
    console.log("Checking for modal session:", sessionStorage.getItem('modalShown'));

    const hasModalBeenShown = sessionStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      console.log("Modal has NOT been shown. Setting timer...");
      const timer = setTimeout(() => {
        console.log("Timer finished! Opening modal.");
        setIsModalOpen(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      console.log("Modal has already been shown this session.");
    }
  }, []);

  return (
    <>
      <Header />
      <FloatingButtons />
      <main>
        {children}
      </main>
      <Footer />
      <ExpertAdviceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Layout;