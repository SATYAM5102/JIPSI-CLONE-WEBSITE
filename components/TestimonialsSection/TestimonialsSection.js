import styles from './TestimonialsSection.module.css';
import Slider from 'react-slick'; // Import the Slider component
import { FaStar } from 'react-icons/fa'; // We'll use this for the star ratings

// Testimonial data
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
  // Settings for the carousel
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 1000, // Transition speed in ms
    slidesToShow: 3, // Show 3 testimonials at a time on desktop
    slidesToScroll: 1, // Scroll 1 testimonial at a time
    autoplay: true, // Automatically scroll
    autoplaySpeed: 3000,
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600, // For mobile phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.container}>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
            At <span style={{ color: '#0b105a', fontWeight: 'bold' }}>JIPSI</span>, the satisfaction and well-being of our patients are our top priorities. Hear from those who have experienced firsthand the transformative care we provide. Our patients’ stories reflect the dedication, expertise, and compassion that define our approach to pain management and sports injury recovery. Read their testimonials to learn how we’ve helped them regain their health and return to an active, pain-free life.
            </p>
            <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                    <div className={styles.cardContent}>
                    <div className={styles.rating}>
                        {/* Create an array of 5 items and map over it to show stars */}
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
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;