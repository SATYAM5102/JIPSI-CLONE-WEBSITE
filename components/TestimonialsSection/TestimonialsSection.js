import { useState, useEffect } from 'react'; // Restored necessary imports
import styles from './TestimonialsSection.module.css';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

// Restored the complete data array
const testimonials = [
  {
    name: "Shakha Agrawal",
    rating: 5,
    text: "I had been suffering from chronic upper shoulder pain since December 2019. What began as a slight discomfort gradually escalated, altering my life in ways I couldn't have imagined... making daily life incredibly difficult."
  },
  {
    name: "Nikhil Tambi",
    rating: 5,
    text: "I haven't frequently seen the dedication you have towards your patients. The extra effort that you put in - staying back much beyond time, taking pain to explain each and every detail involved in the work that you do..."
  },
  {
    name: "Sharad Gupta",
    rating: 5,
    text: "For some past couple of months, I had been suffering from a bad case of Frozen Shoulder. My range of motion was quite restricted and the night pain was excruciating, both of which led to a rapid deterioration of my quality of life."
  },
  {
    name: "Hetal Raval",
    rating: 5,
    text: "I had very severe nerve pain at ankle. Had gone through 3 major surgeries. But still I didn't get relief. It was since 4 years. I couldn't do any exercise, walk or stand for longer period of time. Doing Garba or dance was just impossible for me."
  }
];

const TestimonialsSection = () => {
  // Restored the hasMounted state for robust client-side rendering
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Unified slider behavior: smooth autoplay, swipe, 1-up on mobile (85% width)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '7.5%', // 85% visible card for readability
        }
      }
    ]
  };

  return (
    <section className={styles.testimonialsSection}>
      {/* Cleaned up the container structure */}
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-description">
          At JIPSI, the satisfaction and well-being of our patients are our top priorities. Hear from those who have experienced firsthand the transformative care we provide. Our patients’ stories reflect the dedication, expertise, and compassion that define our approach to pain management and sports injury recovery. Read their testimonials to learn how we’ve helped them regain their health and return to an active, pain-free life.
        </p>
        
        {/* Restored the conditional class and key for a robust render */}
        <div className={`${styles.sliderContainer} ${hasMounted ? styles.sliderReady : ''}`}>
          {hasMounted && (
            <Slider key={hasMounted ? 'slider-ready' : 'slider-loading'} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.rating}>
                      {[...Array(5)].map((star, i) => (
                        <FaStar key={i} color={i < testimonial.rating ? "#ffc107" : "#e4e5e9"} />
                      ))}
                    </div>
                    <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                    <h3 className={styles.patientName}>- {testimonial.name}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;